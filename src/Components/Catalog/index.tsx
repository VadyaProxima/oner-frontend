'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import style from "../CategoryMenu/CategoryMenu.module.scss";
import Card from "./Card";
import styles from "./Catalog.module.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useCategoryQuery } from '@/hooks/useCategoryQuery';
import { useCardsQuery } from "@/hooks/useCardsQuery";
export default function CatalogWithCategories() {
    const { data: categories, isLoading: categoriesLoading, isSuccess: categoriesSuccess } = useCategoryQuery();
    const { data: cards, isLoading: cardsLoading, isSuccess: cardsSuccess } = useCardsQuery();
    const [selectedCategory, setSelectedCategory] = useState(null);

    function handleCategoryClick(categoryId) {
        setSelectedCategory(prev => prev === categoryId ? null : categoryId);
    }
    return (
        <div>
            <div className={style.container}>
            {categories?.map(category => (
                    <button key={category.id} 
                    className={style.catrgories}
                    onClick={() => handleCategoryClick(category.id)}
                    >
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

            <div className={styles.container}>
                <h2 className={styles.title}>
                    Автомасла
                </h2>
                <div className={styles.list}>
                {cards?.filter(card => selectedCategory === null || card.category.id === selectedCategory).map(card => (
                    <div className={styles.product_card} key={card.id}>
                        <div className={styles.cardItem}>
                            <div className={styles.product_cardIcon}>
                                <Image 
                                    src={card.image.includes('http') ? card.image : `/assets/${card.image}`} 
                                    alt='icon' 
                                    width={220} 
                                    height={220} 
                                />
                            </div>
                            <div className={styles.product_details}>
                                <div className={styles.title}>{card.name}</div>
                                <div className={styles.price_basket}>
                                    <div className={styles.price}>{card.price} ₽</div>
                                    <div className={styles.product_cardIcon2}>
                                        <Image 
                                            width={24} 
                                            height={24} 
                                            src="/assets/basket.svg" 
                                            alt="basket" 
                                        />
                                    </div>      
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                
            </div>
        </div>
    );
}
