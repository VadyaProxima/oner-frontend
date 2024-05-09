'use client'
import React from 'react'
import Image from 'next/image';
import style from "./CategoryMenu.module.scss"
import { useCategoryQuery } from '@/hooks/useCategoryQuery';
export default function CategoryMenu() {
    const { data, isLoading, isSuccess } = useCategoryQuery();
    console.log(data)
    return (
        <div className={style.container}>


            {data?.map(category => (
                <button key={category.id} className={style.catrgories}>
                    <div className={style.catrgoriesIcon}>
                    <Image 
                src={category.image.includes('http') ? category.image : `/assets/${category.image}`} 
                alt='icon' 
                width={35} 
                height={35} 
            />
                    </div>
                    <div className={style.catrgoriesText}>
                        <h4>{category.name}</h4>
                        <span>730 товаров</span>
                    </div>
                    
                </button>
))} 

                
        </div>
  )
}
