import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image';


export default function Footer() {

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.block}>
          <h3>Меню компании</h3>
          <li> <a href="">Что такое Oner</a></li>
          <li> <a href="">Реквизиты и информация</a></li>
          <li> <a href=" ">Новости </a></li>
          <li> <a href="">Вакансии</a></li>
          <li> <a href="">Поставщикам</a></li>
          <li> <a href="">Контакты</a></li>
        </ul>
        <div className={styles.block}>
          <h3>Каталоги</h3>
          <span>Оригинальные запчасти</span>
          <span>Неоригинальные запчасти</span>
          <span>Запчасти для ТО</span>
          <span>Автомасла</span>
          <span>Аккумуляторы</span>
          <span>Распродажа</span>
        </div>
        
        <div className={styles.block}>
          <h3>Помощь</h3>
          <span>Часто задаваемые вопросы</span>
          <span>Консультация Online</span>
          <span>Оплата заказа</span>
          <span>Доставка заказа</span>
          <span>Возврат товара</span>
          <span>Забыл пароль</span>
        </div>

        <div className={styles.block}>
          <h3>Товары и бренды</h3>
          <span>Список брендов</span>
          <span>Популярные товары</span>
          <span>Наличие на складах</span>
        </div>
        
        <button className={styles.button}>
                    <div className={styles.buttonIcon}>
                        <Image fill src="/assets/comment.svg" alt="logo" />
                    </div>
                    <div className={styles.buttonText}>
                      <h3>Консультация онлайн</h3>
                      <span>Задавайте вопросы</span>
                    </div>
                </button>


          
      </div>
      <div className={styles.container2}>
          <span>Copyright © ООО «Oner.ru» 2021. All rights reserved.</span>
          <div className={styles.pay}>
            <span>Принимаем к оплате</span>
            <div className={styles.icons}>
                        <div className={styles.icon}>
            <Image  width={67} height={36} src="/assets/pay3.svg" alt="logo" />
          </div>
          <div className={styles.icon}>
            <Image  width={47} height={36} src="/assets/pay2.svg" alt="logo" />
          </div>
          <div className={styles.icon}>

            <Image  width={67} height={36} src="/assets/pay1.svg" alt="logo" />
          </div>
            </div>
          </div>
          <div className={styles.oferta_conf}>
            <span className={styles.oferta}>Оферта</span>
            <span>Конфиденциальность</span>
          </div>
      </div>


    </div>
  )
}
