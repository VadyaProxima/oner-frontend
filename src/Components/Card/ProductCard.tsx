'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import { addToCart } from '../../hooks/useAddToCard';
import { Card } from '../../types/card';

interface ProductCardProps {
  product: Card;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = useCallback(async () => {
    await addToCart(product.id, product.price, product.image, product.name);
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className={styles.product_card} key={product.id}>
      <div className={styles.cardItem}>
        <div className={styles.product_cardIcon}>
          <Image
            src={product.image.includes('http') ? product.image : `/assets/${product.image}`}
            alt='icon'
            fill />
        </div>
        <div className={styles.product_details}>
          <div className={styles.title}>{product.name}</div>
          <div className={styles.price_basket}>
            <div className={styles.price}>{product.price} ₽</div>
            <button
              onClick={handleAddToCart}
              className={styles.product_cardIcon2}>
              <Image
                fill
                src="/assets/basket.svg"
                alt="basket" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
