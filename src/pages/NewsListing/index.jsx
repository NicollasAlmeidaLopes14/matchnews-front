import { MdOutlineArticle } from 'react-icons/md'
import { useEffect, useState } from 'react'

import NewsListingCard from '../../components/NewsListingCard'
import SiteHeader from '../../components/SiteHeader'

import tacticalAnalysisImage from '../../assets/analise-tatica.png'
import nationalFootballImage from '../../assets/futebol-nacional.png'
import europeanFootballImage from '../../assets/futebol-europeu.png'
import interviewImage from '../../assets/entrevista.png'
import transferImage from '../../assets/transferencias.png'
import youthFootballImage from '../../assets/futebol-base.png'

import styles from './styles.module.css'

const categoryImages = {
    'ANÁLISE TÁTICA': tacticalAnalysisImage,
    'MERCADO DA BOLA': transferImage,
    'FUTEBOL EUROPEU': europeanFootballImage,
    'CAMPEONATO NACIONAL': nationalFootballImage,
    'ENTREVISTA': interviewImage,
    'CATEGORIAS DE BASE': youthFootballImage
}

const getCategoryImage = (category) => {
    return categoryImages[category]
}

function NewsListing() {
    const [news, setNews] = useState([])

    useEffect(() => {
        const listarNoticias = async () => {
            try {
                const response = await fetch("http://localhost:8080/noticias")

                if (!response.ok) throw new Error(`Erro HTTP: ` + response.status);

                const dados = await response.json()
                setNews(dados)
            } catch (error) {
                console.error(`Erro ao listar notícias: ${error}`)
            }
        }
        listarNoticias()
    }, [])

    return (
        <div className={styles.page}>
            <SiteHeader />

            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div>
                        <span className={styles.eyebrow}>Central de notícias</span>
                        <h1 className={styles.title}>O futebol em todos os ângulos</h1>
                        <p className={styles.subtitle}>
                            Acompanhe análises, bastidores e os principais acontecimentos do futebol nacional e internacional.
                        </p>
                    </div>

                    <div className={styles.totalBadge}>
                        <MdOutlineArticle aria-hidden="true" />
                        <div>
                            <strong>{news.length}</strong>
                            <span>notícias publicadas</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className={styles.content}>
                <div className={styles.sectionHeading}>
                    <div>
                        <span className={styles.sectionEyebrow}>Atualizações</span>
                        <h2>Notícias recentes</h2>
                    </div>

                    <span className={styles.resultCount}>{news.length} resultados</span>
                </div>

                <div className={styles.newsGrid}>
                    {!news.length &&
                        <div className={styles.emptyState} role="status" aria-live="polite">
                            <span className={styles.emptyStateIcon}>
                                <MdOutlineArticle aria-hidden="true" />
                            </span>
                            <h3>Nenhuma notícia publicada ainda</h3>
                            <p>Quando publicarmos as notícias, elas aparecerão aqui!</p>
                        </div>
                    }

                    {news.map((n) => (
                        <NewsListingCard
                            key={n.id}
                            title={n.titulo}
                            summary={n.resumo}
                            category={n.categoria}
                            author={n.autor}
                            publishedAt={n.dataPublicacao}
                            img={getCategoryImage(n.categoria)}
                            imgAlt={n.categoria}
                            featured={news[0] == n}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default NewsListing
