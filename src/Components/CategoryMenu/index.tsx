'use client'
import React from 'react'
import Image from 'next/image';
import style from "./CategoryMenu.module.scss"
import { useCategoryQuery } from '@/hooks/useCategoryQuery';
import { Category } from '@/types/category';

interface CategoryButtonProps {
    category: Category;
    onClick: (category: Category) => void;
  }
  
  const CategoryButton: React.FC<CategoryButtonProps> = ({ category, onClick }) => {
    return (
        

            

            <button key={category.id} className={style.catrgories} onClick={() => onClick(category)}>
                <div className={style.catrgoriesIcon}>
                    <Image 
                        src={category.image.includes('http') ? category.image : `/assets/${category.image}`}
                        alt='icon' 
                        width={48} 
                        height={48} 
                    />
                </div>
                <div className={style.catrgoriesText}>
                    <h4>{category.name}</h4>    
                    <span>730 товаров</span>
                </div>
            </button>
       
      
        
    );
  };
  
  export default CategoryButton;