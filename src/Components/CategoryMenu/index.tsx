import React from 'react'
import Image from 'next/image';
import style from "./CategoryMenu.module.scss"
export default function CategoryMenu() {
    return (
        <div className={style.container}>
                <button className={style.catrgories}>
                    <div className={style.catrgoriesIcon}>
                        <Image fill src="/assets/cATEGORY1.svg" alt="logo" />
                    </div>
                    <div className={style.catrgoriesText}>
                        <h4>Аккумуляторы</h4>
                        <span>730 товаров</span>
                    </div>
                    
                </button>

                <button className={style.catrgories}>
                    <div className={style.catrgoriesIcon}>
                        <Image fill src="/assets/cATEGORY2.svg" alt="logo" />
                    </div>
                    <div className={style.catrgoriesText}>
                        <h4>Автомасла</h4>
                        <span>730 товаров</span>
                    </div>
                    
                </button>
                <button className={style.catrgories}>
                    <div className={style.catrgoriesIcon}>
                        <Image fill src="/assets/cATEGORY22.svg" alt="logo" />
                    </div>
                    <div className={style.catrgoriesText}>
                        <h4>Диски</h4>
                        <span>730 товаров</span>
                    </div>
                    
                </button>

        </div>
  )
}
