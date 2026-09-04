import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { MdAccessTime, MdOutlineTrendingUp } from 'react-icons/md'

import LastNewsCard from '../../components/LastNewsCard'
import SiteHeader from '../../components/SiteHeader'
import newsImage from '../../assets/Tecnico-do-Benfica-Jose-Mourinho-em-coletiva-de-imprensa-da-Champions-League-scaled-aspect-ratio-512-320-1.webp'
import styles from './styles.module.css'

const secondaryNews = [
    {
        id: 1,
        category: 'Mercado da bola',
        title: 'Clubes aceleram negociações na reta final da janela',
        description: 'Conversas avançam nos bastidores e novos reforços podem ser anunciados nos próximos dias.',
        publishedAt: 'Há 2 horas',
    },
    {
        id: 2,
        category: 'Análise tática',
        title: 'A mudança no meio-campo que deu mais controle à equipe',
        description: 'A aproximação entre os setores ajudou o time a recuperar a bola e construir jogadas com mais segurança.',
        publishedAt: 'Há 5 horas',
    },
]

const latestNews = [
    {
        id: 1,
        category: 'Campeonato nacional',
        title: 'Rodada decisiva promete movimentar a parte de cima da tabela',
        description: 'Confrontos diretos colocam frente a frente equipes que chegam embaladas para a sequência da competição.',
        publishedAt: 'Hoje, 09:15',
        readTime: '4 min de leitura',
        author: 'Redação MatchNews',
    },
    {
        id: 2,
        category: 'Futebol europeu',
        title: 'Champions retorna com duelos que podem definir a temporada',
        description: 'Os clubes finalizam a preparação para uma semana decisiva no principal torneio europeu.',
        publishedAt: 'Ontem, 21:40',
        readTime: '6 min de leitura',
        author: 'Redação MatchNews',
    },
    {
        id: 3,
        category: 'Categorias de base',
        title: 'Jovens talentos ganham espaço entre os profissionais',
        description: 'Atletas formados no clube aproveitam as oportunidades e chamam a atenção da comissão técnica.',
        publishedAt: 'Ontem, 18:20',
        readTime: '5 min de leitura',
        author: 'Redação MatchNews',
    },
]

function Home() {
    return (
        <div className={styles.page}>
            <SiteHeader activePage="home" />

            <div className={styles.intro}>
                <div>
                    <span className={styles.eyebrow}>Destaques do dia</span>
                    <h1>O futebol explicado além do placar</h1>
                </div>
                <p>Notícias, contexto e análises sobre o que movimenta o futebol dentro e fora de campo.</p>
            </div>

            <main>
                <section className={styles.headlines} aria-label="Principais notícias">
                    <article className={styles.leadStory}>
                        <img
                            className={styles.leadImage}
                            src={newsImage}
                            alt="José Mourinho durante uma entrevista coletiva"
                        />
                        <div className={styles.leadOverlay} />

                        <div className={styles.leadContent}>
                            <span className={styles.leadBadge}>
                                <MdOutlineTrendingUp aria-hidden="true" />
                                Em destaque
                            </span>
                            <span className={styles.leadCategory}>Futebol europeu</span>
                            <h2>Benfica ajusta estratégia para os próximos desafios da temporada</h2>
                            <p>Comissão técnica trabalha novas soluções para dar equilíbrio ao time e manter a intensidade nos jogos decisivos.</p>
                            <span className={styles.leadTime}>
                                <MdAccessTime aria-hidden="true" />
                                Atualizado há 40 minutos
                            </span>
                        </div>
                    </article>

                    <aside className={styles.secondaryColumn} aria-label="Outras notícias em destaque">
                        {secondaryNews.map((news, index) => (
                            <article className={styles.secondaryCard} key={news.id}>
                                <div className={styles.secondaryTopline}>
                                    <span>{news.category}</span>
                                    <strong>0{index + 1}</strong>
                                </div>
                                <h2>{news.title}</h2>
                                <p>{news.description}</p>
                                <span className={styles.secondaryTime}>
                                    <MdAccessTime aria-hidden="true" />
                                    {news.publishedAt}
                                </span>
                            </article>
                        ))}
                    </aside>
                </section>

                <section className={styles.latestSection}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <span className={styles.eyebrow}>Atualizações</span>
                            <h2>Últimas notícias</h2>
                        </div>

                        <Link className={styles.allNewsLink} to="/noticias">
                            Ver todas
                            <FaArrowRight aria-hidden="true" />
                        </Link>
                    </div>

                    <div className={styles.latestGrid}>
                        {latestNews.map((news) => (
                            <LastNewsCard
                                key={news.id}
                                {...news}
                                image={newsImage}
                                imageAlt="Treinador durante entrevista coletiva de futebol"
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
