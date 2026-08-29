import styles from './styles.module.css'

function NewsListingCard({ category, img, timesTamp, title, description }) {
    return (
        <div className={styles.container}>
            <span className={styles.categoryBadge}>{category}</span>
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${img})` }}></div>

            <div className={styles.cardContent}>
                <span className={styles.newsDate}>{timesTamp}</span>

                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    )
}

export default NewsListingCard;