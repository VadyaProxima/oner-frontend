'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import styles from './Header.module.scss'
function Header() {
	const [nav, setNav] = useState(false)
	return (
		<>
			<div
				// style={{display: 'none'}}
				className={
                    nav ? `${styles.drawer} ${styles.active}` : styles.drawer
                }
			>
				<div style={{ padding: '13px 15px' }} className={styles.drawerBlock1}>
					<div onClick={() => setNav(!nav)} className={styles.mobbtn}>
						{nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
					</div>

					<div className={styles.userText1}>
						<Image
							height={32}
							width={32}
							src="/assets/User,Profile.svg"
							alt="logo"
						/>
						<div style={{ marginLeft: '6px' }}>
							<Link href="/login"> Вход </Link> /
							<Link href="/registration"> Регистрация</Link>
						</div>
					</div>
				</div>

				<div
					style={{
						paddingTop: '20px',
						paddingBottom: '20px',
						paddingLeft: '15px',
					}}
					className={styles.drawerBlock2}
				>
					<div style={{ marginBottom: '20px' }} className={styles.geo}>
						<div style={{ marginRight: '10px' }} className={styles.geoLogo}>
							<Image
								height={32}
								width={32}
								src="/assets/Group.svg"
								alt="logo"
							/>
						</div>
						<div className={styles.geoText}>Пятигорск</div>
					</div>

					<div style={{ marginBottom: '20px' }} className={styles.phone}>
						<div style={{ marginRight: '10px' }} className={styles.phoneLogo}>
							<Image
								height={32}
								width={32}
								src="/assets/Phone.svg"
								alt="logo"
							/>
						</div>
						<div className={styles.phoneText}>+7 (347) 229-46-45</div>
					</div>

					<Link
						style={{ display: 'flex', alignItems: 'center' }}
						href="/basket"
					>
						<div className={styles.basketIcon}>
							<Image
								height={34}
								width={34}
								src="/assets/basket1.svg"
								alt="logo"
							/>
						</div>
						<div className={styles.basketText}>Корзина</div>
						<div className={styles.basketCircle}>
							<span className={styles.basketQuantity}>5</span>
						</div>
					</Link>
				</div>
				<div className={styles.button_list}>
					<button>Запчасти для ТО</button>
					<button>Автомасла</button>
					<button>Оригинальные запчасти</button>
					<button className={styles.adapt}>Неоригинальные запчасти</button>
					<button className={styles.adapt}>Лампочки</button>
					<button className={styles.adapt}>Аккумуляторы</button>
				</div>
			</div>

			<div className={styles.header}>
				<div className={`container ${styles.wrapper}`}>
					<div onClick={() => setNav(!nav)} className={styles.mobbtn}>
						{nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
					</div>

					<div className={styles.da}>
						<Link href="/" className={styles.logo}>
							<Image fill src="/assets/logo (2).svg" alt="logo" />
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
								<Image
									width={25}
									height={25}
									src="/assets/Group.svg"
									alt="logo"
								/>
							</div>
							<div className={styles.geoText}>Пятигорск</div>
						</div>
						<Link href="/basket" className={styles.basket11}>
							<Image
								width={25}
								height={25}
								src="/assets/basket1.svg"
								alt="logo"
							/>
						</Link>
						<div className={styles.phone}>
							<div className={styles.phoneLogo}>
								<Image
									width={25}
									height={25}
									src="/assets/Phone.svg"
									alt="logo"
								/>
							</div>
							<div className={styles.phoneText}>+7 (347) 229-46-45</div>
						</div>
						<div className={styles.user}>
							<div className={styles.userLogo}>
								<Link href="/registration">
									<Image
										width={25}
										height={25}
										src="/assets/User,Profile.svg"
										alt="logo"
									/>
								</Link>
							</div>
							<div className={styles.userText}>
								<Link href="/login">Вход</Link> /{' '}
								<Link href="/registration">Регистрация</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
