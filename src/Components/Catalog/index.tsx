'use client'
import Card from "./Card"
import styles from "./Catalog.module.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Catalog() {

    const responsive = {
        // superLargeDesktop: {
        //   // the naming can be any, depends on you.
        // //   breakpoint: { max: 4000, min: 3000 },
        // //   items: 5
        // },
        desktop: {
          breakpoint: { max: 3000, min: 1440 },
          items: 4
        },
        // tablet: {
        //   breakpoint: { max: 1024, min: 464 },
        //   items: 2
        // },
        // mobile: {
        //   breakpoint: { max: 464, min: 0 },
        //   items: 1
        // }
      };

    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <h2 className={styles.title}>
                    Автомасла
                </h2>
                <ul >
                <Carousel responsive={responsive}>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>

                </Carousel>
                </ul>
            </div>

            <div className={styles.carousel}>
                <h2 className={styles.title}>
                Рекомендуем
                </h2>
                <ul >
                <Carousel responsive={responsive}>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>

                </Carousel>
                </ul>
            </div>

            <div className={styles.carousel}>
                <h2 className={styles.title}>
                Часто продаваемые
                </h2>
                <ul >
                <Carousel responsive={responsive}>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>
                    <li><Card/></li>

                </Carousel>
                </ul>
            </div>
        </div>

    
    )
}