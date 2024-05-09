import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import { useCardsQuery } from '../../../hooks/useCardsQuery';

const Card: React.FC = () => {
   const { data: cards, isError, isLoading } = useCardsQuery();

   if (isLoading) return <div>Loading...</div>;
   if (isError) return <div>Error loading cards</div>;

   return (
       <div className={styles.product_card}>

           {cards && cards.map((card: CardItem) => (
               <div key={card.id} className={styles.cardItem}>

                   <div className={styles.product_cardIcon}>
                       <Image 
                           src={card.image.includes('http') ? card.image : `/assets/${card.image}`} 
                           alt='icon' 
                           width={220} 
                           height={220} 
                       />
                   </div>
                   <div className={styles.product_details}>
                       {/* <div className={styles.sku}>Артикул: {card.sku}</div> */}
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
           ))}
       </div>
   );
}

export default Card;