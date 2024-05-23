'use client'
import styles from "./login.module.scss"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Basket(){
    return(
        <div className={styles.container}>
               <div className={styles.wrapper}>
            <h1>Войти</h1>
            

            {/* <div className={styles.unput_box}> 
                <label htmlFor="rb1">Номер телефона</label> </div> */}
                
            
                
            
                 
            <ul className={styles.input_text}>
               
                <input type="text" placeholder="Телефон" />
                <input type="text" placeholder="Пароль" />
                
                <button>
                    Войти
                </button>
            </ul>
            <h3 className={styles.text}>Нет аккаунта? <Link href='/registration'>Зарегистрироваться</Link></h3>
        </div> 
        </div>
        
    )
}