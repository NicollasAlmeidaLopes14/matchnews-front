import { MdAccessTime, MdPersonOutline } from 'react-icons/md'

import styles from './styles.module.css'

function LastNewsCard({ category, title, description, publishedAt, readTime, author, image, imageAlt = '' }) {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} className={styles.image} alt={imageAlt} />
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

                <h3>{title}</h3>
                <p>{description}</p>

                <span className={styles.author}>
                    <MdPersonOutline aria-hidden="true" />
                    {author}
                </span>
            </div>
        </article>
    )
}

export default LastNewsCard
