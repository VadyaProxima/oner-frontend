'use client';

import Link from 'next/link';
import styles from './Header.module.scss'
import Image from 'next/image';

function Header() {

    return (
        <header className={styles.header}>
            <div className={`container ${styles.wrapper}`}>
            <div className={styles.da}>
                <Link href="/" className={styles.logo}>
                    <Image fill src="/assets/Logo.svg" alt="logo" />
                </Link>
                <div className={styles.inputContainer}>
                    <input 
                    type="text" 
                    placeholder="Введите номер запчасти или VIN" 
                    className={styles.inputField}
                    /> 
                    {/* <Image fill src="/assets/Search.png" alt="logo" className={styles.searchIcon}/> */}
                </div>
            </div>
            
            <div className={styles.nav}>
              <div className={styles.geo}>
                <div className={styles.geoLogo}>
                <Image fill src="/assets/Group.svg" alt="logo" />
                </div >
                <div className={styles.geoText}>Пятигорск</div>
              </div>
                <div className={styles.phone}>
                    <div className={styles.phoneLogo}>
                    <Image fill src="/assets/Phone.svg" alt="logo" />
                    </div >
                    <div className={styles.phoneText}>+7 (347) 229-46-45</div>
                </div>
                <div className={styles.user}>
                    <div className={styles.userLogo}>
                    <Image fill src="/assets/User,Profile.svg" alt="logo" />
                    </div >
                    <div className={styles.userText}>Вход / Регистрация</div>
                </div>
            </div>
            
           
            </div>
        </header>);
}

export default Header;