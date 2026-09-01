import styles from './styles.module.css'

function NewsRegisterForm({ title, description, icon, compact = false, children }) {
    return (
        <section className={`${styles.container} ${compact ? styles.compact : ''}`}>
            <header className={styles.header}>
                <span className={styles.iconWrapper}>{icon}</span>
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    {description && <p className={styles.description}>{description}</p>}
                </div>
            </header>

            <div className={styles.content}>{children}</div>
        </section>
    )
}

export default NewsRegisterForm
