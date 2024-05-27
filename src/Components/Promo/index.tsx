'use client'
import 'react-multi-carousel/lib/styles.css'
import './Promo.module.scss'
import styles from './Promo.module.scss'
import Slide from './Slide'

export default function PromotionSlide() {
	return (
		<>
			<section className={styles.container}>
				<div>
					<Slide />
				</div>
			</section>
		</>
	)
}
