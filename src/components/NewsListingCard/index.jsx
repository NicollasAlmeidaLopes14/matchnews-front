import { MdAccessTime, MdPersonOutline } from 'react-icons/md'

import styles from './styles.module.css'

function NewsListingCard({
    category,
    img,
    imgAlt = '',
    publishedAt,
    readTime,
    author,
    title,
    description,
    featured = false,
}) {
    return (
        <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={img} alt={imgAlt} />
                <span className={styles.categoryBadge}>{category}</span>
            </div>

            <div className={styles.content}>
                <div className={styles.metadata}>
                    <span>
                        <MdAccessTime aria-hidden="true" />
                        {publishedAt}
                    </span>
                    <span>{readTime}</span>
                </div>

                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.author}>
                    <span className={styles.authorIcon}>
                        <MdPersonOutline aria-hidden="true" />
                    </span>
                    <span>{author}</span>
                </div>
            </div>
        </article>
    )
}

export default NewsListingCard
