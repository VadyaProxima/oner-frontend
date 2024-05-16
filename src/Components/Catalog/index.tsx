'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import style from "../CategoryMenu/CategoryMenu.module.scss";
import styles from "./Catalog.module.scss";
import { useCategoryQuery } from '@/hooks/useCategoryQuery';
import { useCardsQuery } from "@/hooks/useCardsQuery";
import useAddToCartMutation from "../../hooks/useAddToCard"; 
import { useUserQuery } from '@/hooks/UseUsersQuery';

export default function CatalogWithCategories() {
    
    const { data: categories, isLoading: categoriesLoading, isSuccess: categoriesSuccess } = useCategoryQuery();
    const { data: cards, isLoading: cardsLoading, isSuccess: cardsSuccess } = useCardsQuery();
    const { data: users, isLoading: usersLoading, isSuccess: usersSuccess } = useUserQuery();
    const [selectedCategory, setSelectedCategory] = useState(null);

    // const [isImageAdded, setIsImageAdded] = useState(false);
    // const [cardStates, setCardStates] = useState({});

    // const { data: cards } = useCardsQuery();
    const addMutation = useAddToCartMutation();

    const handleAddToCart = (productId: number) => {
        addMutation.mutate(productId);
    };
  


    // const handleButtonClick = (cardId) => {
    //   setCardStates(prevState => {
    //     return {
    //       ...prevState,
    //       [cardId]: !prevState[cardId]
    //     }
    //   });
    // };  

        
    function handleCategoryClick(categoryId) {
        setSelectedCategory(prev => prev === categoryId ? null : categoryId);
    }

    // Новая функция для сброса выбранной категории
    function handleShowAllClick() {
       setSelectedCategory(null);
    }

    const filteredCards = selectedCategory === null ? cards : cards?.filter(card => card.category.id === selectedCategory);

    // Показывать кнопку "Показать все товары" только если выбрана одна из категорий
    const showAllButton = selectedCategory !== null ? (
        <button className={style.catrgories} onClick={handleShowAllClick}><h4 className={style.da}>Показать все товары</h4></button>
    ) : null;

    const selectedCategoryObj = categories?.find(category => category.id === selectedCategory);

    return (
        <div>
            <div className={style.container}>
                <div className={style.gridcategory}>
                    {categories?.map(category => (
                    <button key={category.id} className={style.catrgories} onClick={() => handleCategoryClick(category.id)}>
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
                {showAllButton}
                </div>
                
            </div>

            <div className={styles.container}>
                <h2 className={styles.title}>
                    {selectedCategoryObj ? selectedCategoryObj.name : 'Все товары'}
                </h2>
                <div className={styles.list}>
                    {filteredCards?.map(card => (
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
                                        <button
                                         onClick={() => handleAddToCart(card.id)}
                                         className={styles.product_cardIcon2}>
                                               <Image 
                                                    width={40} 
                                                    height={40} 
                                                    src="/assets/basket.svg" 
                                                    alt="basket" 
                                                />
                                           
                                                
                                           
                                        </button>
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




