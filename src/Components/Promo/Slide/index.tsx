
"use client"
import styles from '../Promo.module.scss';
import { usePromosQuery } from '../../../hooks/usePromosQuery';
import Image from 'next/image';
import image1 from '../../../../public/assets/promopic1.svg';

export default function Slide() {
  const { data: promos, isError, isLoading } = usePromosQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading promotions</div>;

  return (
      <div className={styles.container}>
          <div className={styles.promotion_slider}>
              {promos && promos.map((promo) => (
                  <div key={promo.id} className={styles.slide}>
                      <div className={styles.content}>
                          <h1>{promo.title}</h1>
                          <p>{promo.text}</p>
                      </div>
                      <Image className={styles.img} src={promo.image} alt={promo.title} layout='fill' />
                  </div>
              ))}
          </div>
      </div>
  );
}