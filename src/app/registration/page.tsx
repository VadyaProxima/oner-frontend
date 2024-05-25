'use client'
import styles from "./registration.module.scss"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Basket(){
    return(
        <div className={styles.container}>
               <div className={styles.wrapper}>
                <div>
                    <h1>Регистрация</h1>
            

            <div className={styles.unput_box}> 
                <div className={styles.radio_text}><input type="radio" name="rb" id="rb1"/> <label htmlFor="rb1">Физ. лицо</label> </div>
            
                <div className={styles.radio_text}><input type="radio" name="rb" id="rb2"/> <label htmlFor="rb2">ООО</label> </div> 
            
               <div className={styles.radio_text}><input type="radio" name="rb" id="rb3"/> <label htmlFor="rb3">ИП</label> </div> 
            </div>
            
                 
            <ul className={styles.input_text}>
                <input type="text" placeholder="Ваше имя" />
                <input type="text" placeholder="Телефон" />
                <input type="text" placeholder='Электронная почта' /> 
                <button>
                    Зарегистрироваться 
                </button>
            </ul>
            <h3 className={styles.text}>Есть аккаунт? <Link href='/login'>Войти</Link></h3>
                </div>
            
        </div> 
        </div>
        
    )
}