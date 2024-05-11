'use client'
import styles from "./basket.module.scss"
import React, { useState } from 'react';
import Image from 'next/image';
export default function Basket(){

        const [count, setCount] = useState(0);
      
        const handleIncrement = () => {
          setCount((prevCount) => prevCount + 1);
        };
      
        const handleDecrement = () => {
          if (count > 0) {
            setCount((prevCount) => prevCount - 1);
          }
        };
    return (
        <div className={styles.basket}>
            <div className={styles.container}>
                <h2>Корзина</h2>
                <div className={styles.sector}>
                    <div className={styles.products}>
                        <div className={styles.checkbox1}>
                            <input type="checkbox" name="" id="" />
                            <span>Отметить/снять все товары</span>
                        </div>
                        <div className={styles.cards}>
                             <input type="checkbox" name="" id="" />
                             <Image width={80} height={80} src="/assets/maslo.svg" alt="logo" />
                             <span className={styles.card_name}>название товара</span>
                             <span className={styles.days}>5 дней</span>
                                <div className={styles.pricecounter}>
                                    <div className={styles.counter}>
                                     <button onClick={handleDecrement}><Image className={styles.incrdecr} width={20} height={20} src="/assets/minus.svg" alt="logo" /></button>
                                     <span className={styles.count}>{count}</span>
                                     <button onClick={handleIncrement}><Image className={styles.incrdecr} width={20} height={20} src="/assets/plus.svg" alt="logo" /></button>
                                     </div>
                                   <span className={styles.priceofine}>1шт=2060р</span>  
                                </div>
                             <h2 className={styles.price}>2060 ₽</h2>
                             <button className={styles.deletebutton}>
                             <Image className={styles.img2} width={20} height={20} src="/assets/deleteitem.svg" alt="logo" />
                             </button>
                        </div>
                    </div>
                    <div className={styles.sector2}>
                        <div className={styles.container22}>

                         <div className={styles.vashzakaz}>
                            <h2>Ваш заказ</h2> 
                            </div>
                            
                            <div className={styles.sector22}>
                                <div className={styles.tovari}>
                                <h2>Товары</h2>
                                <h2>6</h2> 
                                </div>
                                
                                <div className={styles.input_with_arrow_button}>
                                <input className={styles.input_text} placeholder='Промокод ' type="text" name="dsadasd" id=""/> 
                                <button className={styles.arrow_button}>
                                    <Image className={styles.img2} width={20} height={20} src="/assets/strelka.svg" alt="logo" />
                                </button>
                                </div>
                                
                            </div>

                            <div className={styles.sector22}>
                                <div className={styles.tovari}>
                                <h2>Итого</h2>
                                <h2>23 870 ₽</h2> 
                                </div>
                                
                                <button className={styles.oformbtn}>
                                    Оформление заказа
                                </button>
                                
                            </div>
                        </div>
                       
                        
                    </div>
                </div>

            </div>
        </div>

    )

}