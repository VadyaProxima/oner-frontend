import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './FooterDropMenu.module.scss';
import Image from 'next/image';

// Dropdown state type definition
type DropdownState = {
  company: boolean;
  catalogs: boolean;
  help: boolean;
  moreHelp: boolean;
};

const FooterDropMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<DropdownState>({
    company: false,
    catalogs: false,
    help: false,
    moreHelp: false,
  });

  const toggleDropdown = (menu: keyof DropdownState) => {
    setIsOpen(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <ul className={styles.block}>
          <div className={styles.drop}>
            <h3>Меню компании</h3>
            <div style={{ color: 'white', paddingTop: '4px' }} onClick={() => toggleDropdown('company')}>
              {isOpen.company ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {isOpen.company && (
            <>
              <li><a href="#">Что такое Oner</a></li>
              <li><a href="#">Реквизиты и информация</a></li>
              <li><a href="#">Новости</a></li>
              <li><a href="#">Вакансии</a></li>
              <li><a href="#">Поставщикам</a></li>
              <li><a href="#">Контакты</a></li>
            </>
          )}
        </ul>

        <ul className={styles.block}>
          <div className={styles.drop}>
            <h3>Каталоги</h3>
            <div style={{ color: 'white', paddingTop: '4px' }} onClick={() => toggleDropdown('catalogs')}>
              {isOpen.catalogs ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {isOpen.catalogs && (
            <>
              <li><a href="#">Оригинальные запчасти</a></li>
              <li><a href="#">Неоригинальные запчасти</a></li>
              <li><a href="#">Запчасти для ТО</a></li>
              <li><a href="#">Автомасла</a></li>
              <li><a href="#">Аккумуляторы</a></li>
              <li><a href="#">Распродажа</a></li>
            </>
          )}
        </ul>

        <ul className={styles.block}>
          <div className={styles.drop}>
            <h3>Помощь</h3>
            <div style={{ color: 'white', paddingTop: '4px' }} onClick={() => toggleDropdown('help')}>
              {isOpen.help ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {isOpen.help && (
            <>
              <li><a href="#">Часто задаваемые вопросы</a></li>
              <li><a href="#">Консультация Online</a></li>
              <li><a href="#">Оплата заказа</a></li>
              <li><a href="#">Доставка заказа</a></li>
              <li><a href="#">Возврат товара</a></li>
              <li><a href="#">Забыл пароль</a></li>
            </>
          )}
        </ul>

        <ul className={styles.block}>
          <div className={styles.drop}>
            <h3>Товары и бренды</h3>
            <div style={{ color: 'white', paddingTop: '4px' }} onClick={() => toggleDropdown('moreHelp')}>
              {isOpen.moreHelp ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {isOpen.moreHelp && (
            <>
              <li><a href="#">Список брендов</a></li>
              <li><a href="#">Популярные товары</a></li>
              <li><a href="#">Наличие на складах</a></li>
            </>
          )}
        </ul>


    
    <button className={styles.button}>
                    <div className={styles.buttonIcon}>
                        <Image fill src="/assets/comment.svg" alt="logo" />
                    </div>
                    <div className={styles.buttonText}>
                      <h3>Консультация онлайн</h3>
                      <span>Задавайте вопросы</span>
                    </div>
                </button>

    <div className={styles.dopinf} style={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}>
            <p>Сервис работает в обычном режиме</p>
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <p style={{marginRight:'20px'}}>Оферта</p>
            <p>Конфиденциальность</p> 
        </div>
            
    </div>
    <div className={styles.pay_rights}>
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
        <span  className={styles.rights}>Copyright © ООО «Oner.ru» 2021. All rights reserved.</span>  
    </div>
 
 </div> 
 
    </footer>
    
  );
}

export default FooterDropMenu;
