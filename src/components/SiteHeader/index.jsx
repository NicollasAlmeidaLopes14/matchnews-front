import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'

import styles from './styles.module.css'

function SiteHeader({ activePage }) {
    return (
        <header className={styles.header}>
            <Link className={styles.brand} to="/" aria-label="Ir para a página inicial do MatchNews">
                <span className={styles.brandMark}>MN</span>
                <span>MatchNews</span>
            </Link>

            <nav className={styles.navigation} aria-label="Navegação principal">
                <Link
                    className={`${styles.navLink} ${activePage === 'home' ? styles.active : ''}`}
                    to="/"
                    aria-current={activePage === 'home' ? 'page' : undefined}
                >
                    Início
                </Link>
                <Link
                    className={`${styles.navLink} ${activePage === 'news' ? styles.active : ''}`}
                    to="/noticias"
                    aria-current={activePage === 'news' ? 'page' : undefined}
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
