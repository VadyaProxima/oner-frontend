'use client'
import { LoginUser } from '@/srvices/fetch'
import Link from 'next/link'
import { useState, ChangeEvent } from 'react'
import styles from './login.module.scss'

export default function Basket() {
	const [formData, setFormData] = useState({
		id: 0,
		username: '',
		password: '',
	})

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

	const handleLoginClick = async () => {
		try {
			await LoginUser(formData)
			console.log(formData)
			console.log('Пользователь успешно авторизован!')
		} catch (error) {
			console.log(formData)
			console.error('Ошибка во время авторизовации пользователя:', error)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1>Войти</h1>

				{/* <div className={styles.unput_box}> 
                <label htmlFor="rb1">Номер телефона</label> </div> */}

				<ul className={styles.input_text}>
					<input
						type="text"
						name="username"
						value={formData.username}
						onChange={handleInputChange}
						placeholder="Ваше имя"
					/>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
						placeholder="Пароль"
					/>

					<button onClick={handleLoginClick}>Войти</button>
				</ul>
				<h3 className={styles.text}>
					Нет аккаунта? <Link href="/registration">Зарегистрироваться</Link>
				</h3>
			</div>
		</div>
	)
}
