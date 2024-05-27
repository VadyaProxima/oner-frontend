import Image from 'next/image'
import { usePromosQuery } from '../../../hooks/usePromosQuery'
import styles from '../Promo.module.scss'

const Slide: React.FC = () => {
	const { data: promos, isError, isLoading } = usePromosQuery()

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error loading promotions</div>

	return (
		<div className={styles.container}>
			<div className={styles.promotion_slider}>
				{promos &&
					promos.map((promo: PromoItem) => (
						<div key={promo.id} className={styles.slide}>
							<div className={styles.content}>
								<h1>{promo.title}</h1>
								<p>{promo.text}</p>
							</div>
							<Image
								className={styles.img}
								src={
									promo.image.includes('http')
										? promo.image
										: `/assets/${promo.image}`
								}
								alt="promopic"
								width={10}
								height={10}
							/>
						</div>
					))}
			</div>
		</div>
	)
}

export default Slide
