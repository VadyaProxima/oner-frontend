
"use client"
import React, { useState } from 'react';
import './Promo.module.scss';
import image1 from '../../../public/assets/promopic1.svg';
import image2 from '../../../public/assets/promopic1.svg';
import image3 from '../../../public/assets/promopic2.svg';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import styles from './Promo.module.scss';
import Slide from './Slide';
  
  const promotions = [
    {
      title: '1Оригинальные автомасла cо скидкой  15%',
      description: '1Акция действует с 1 по 30 июня 2021',
      imageUrl: image1,
    },
    {
        title: '2Оригинальные автомасла cо скидкой  15%',
        description: '2Акция действует с 1 по 30 июня 2021',
        imageUrl: image1,
    },
    {
        title: '3Оригинальные автомасла cо скидкой  15%',
        description: '3Акция действует с 1 по 30 июня 2021',
        imageUrl: image1,
    }
  ];

  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    // //   breakpoint: { max: 4000, min: 3000 },
    // //   items: 5
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1440},
      items: 1
    },
  }
  
  // const PromotionSlider: React.FC = () => {
  //   const [activeIndex, setActiveIndex] = useState(0);
  
  //   const handlePrevClick = () => {
  //     setActiveIndex((prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length);
  //   };
  
  //   const handleNextClick = () => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  //   };
  
  export default function PromotionSlide() {
    return (
        <div className={styles.container}>

<div className={styles.carousel}>
                <Carousel responsive={responsive}>
                    <li><Slide/></li>
                    <li><Slide/></li>
                    <li><Slide/></li>
                </Carousel>
                
            </div>

       </div>
    );
  };
  
  



