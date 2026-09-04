import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'

import styles from './styles.module.css'

function SiteHeader() {
    return (
        <header className={styles.header}>
            <Link className={styles.brand} to="/" aria-label="Ir para a página inicial do MatchNews">
                <span className={styles.brandMark}>MN</span>
                <span>MatchNews</span>
            </Link>

            <nav className={styles.navigation} aria-label="Navegação principal">
                <Link
                    className={`${styles.navLink} ${styles.active}`}
                    to="/"
                    aria-current="page"
                >
                    Notícias
                </Link>
            </nav>

            <Link className={styles.registerLink} to="/cadastro-noticias">
                <MdAdd aria-hidden="true" />
                Nova notícia
            </Link>
        </header>
    )
}

export default SiteHeader
