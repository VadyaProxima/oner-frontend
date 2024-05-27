'use client'
import { Category } from '@/types/category'
import Image from 'next/image'
import React from 'react'
import style from './CategoryMenu.module.scss'

interface CategoryButtonProps {
	category: Category
	onClick: (category: Category) => void
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
	category,
	onClick,
}) => {
	return (
		<button
			key={category.id}
			className={style.catrgories}
			onClick={() => onClick(category)}
		>
			<div className={style.catrgoriesIcon}>
				<Image
					src={
						category.image.includes('http')
							? category.image
							: `/assets/${category.image}`
					}
					alt="icon"
					width={48}
					height={48}
				/>
			</div>
			<div className={style.catrgoriesText}>
				<h4>{category.name}</h4>
				<span>730 товаров</span>
			</div>
		</button>
	)
}

export default CategoryButton
