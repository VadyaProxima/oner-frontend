import styles from '../Promo.module.scss';
import Image from 'next/image';
import image1 from '../../../../public/assets/promopic1.svg';

export default function Slide() {

    return (
        <div className={styles.container}>
                <div className={styles.promotion_slider}>
          <div className={styles.slide}>
            <div className={styles.content}>
              <h1>Оригинальные автомасла
                cо скидкой  15% </h1>
              <p>Акция действует с 1 по 30 июня 2021</p>
            </div>
            <Image className={styles.img} src={image1} alt='sas'/>
          </div>
        </div>
        </div>
    
    )

}