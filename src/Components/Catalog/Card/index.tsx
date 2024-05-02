import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
// type ProductCardProps = {
//     imageSrc: string;
//     sku: string;
//     title: string;
//     price: string;
// };

export default function Card() {
    return (
        
        <div className={styles.product_card}>
            
            <div className={styles.product_cardIcon}>
                <Image fill src='/assets/img.svg' alt='sdad' />
            </div>
            <div className={styles.product_details}>
                <div className={styles.sku}>Артикул: 1233132</div>
                <div className={styles.title}>название</div>
                <div className={styles.price_basket}>
                    <div className={styles.price}>12331 ₽</div>
                <div className={styles.product_cardIcon2}>
                        <Image width={24} height={24} src="/assets/basket.svg" alt="logo" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}


