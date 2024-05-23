
"use client"
import React, { useState } from 'react';
import './Promo.module.scss';
import image1 from '../../../public/assets/promopic1.svg';
import image2 from '../../../public/assets/promopic1.svg';
import image3 from '../../../public/assets/promopic2.svg';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styles from './Promo.module.scss';
import Slide from './Slide';
  

  export default function PromotionSlide() {
    return (
      <>
      <section className={styles.container}>
        <div>
          <Slide/>
        </div>
      </section>
    </>
    )


   
  };
  
  



