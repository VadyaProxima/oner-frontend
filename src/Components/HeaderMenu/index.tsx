'use client';
import Image from 'next/image';
import styles from './HeaderMenu.module.scss'
export default function HeaderMenu() {
    return (
        <header className={styles.headerMenu}>
            <div className={styles.wrapper}>
                <button className={styles.button}>
                    <div className={styles.buttonIcon}>
                        <Image fill src="/assets/tochki.svg" alt="logo" />
                    </div>
                    <div className={styles.buttonText}>Все категории</div>
                </button>

                <ul className={styles.button_list}>
                  <button>Запчасти для ТО</button>
                  <button>Автомасла</button>
                  <button>Оригинальные запчасти</button>
                  <button>Неоригинальные запчасти</button>
                  <button>Лампочки</button>
                  <button>Аккумуляторы</button>
                </ul>

                <button className={styles.basket}>
                    <div className={styles.basketIcon}>
                        <Image fill src="/assets/basket.svg" alt="logo" />
                    </div>
                    <div className={styles.basketText}>Корзина</div>
                    <div className={styles.basketCircle}>
                    <span className={styles.basketQuantity}>5</span>
                    </div>
                </button>


            </div>
        </header>
    )
}