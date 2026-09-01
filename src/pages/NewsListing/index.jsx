import { Link } from 'react-router-dom'
import { MdAdd, MdArrowBack, MdOutlineArticle } from 'react-icons/md'

import NewsListingCard from '../../components/NewsListingCard'
import testImage from '../../assets/Tecnico-do-Benfica-Jose-Mourinho-em-coletiva-de-imprensa-da-Champions-League-scaled-aspect-ratio-512-320-1.webp'
import styles from './styles.module.css'

const newsItems = [
    {
        id: 1,
        category: 'Análise tática',
        title: 'Como a nova formação mudou a dinâmica da equipe no meio-campo',
        description: 'A comissão técnica apostou em mais mobilidade entre os setores e encontrou novas soluções para controlar o ritmo das partidas.',
        publishedAt: 'Hoje, 10:30',
        readTime: '5 min de leitura',
        author: 'Redação MatchNews',
        img: testImage,
        imgAlt: 'José Mourinho durante uma entrevista coletiva',
        featured: true,
    },
    {
        id: 2,
        category: 'Mercado da bola',
        title: 'Clubes se movimentam nos últimos dias da janela de transferências',
        description: 'Negociações avançam nos bastidores e podem definir reforços importantes para a sequência da temporada.',
        publishedAt: 'Hoje, 09:15',
        readTime: '4 min de leitura',
        author: 'Redação MatchNews',
        img: testImage,
        imgAlt: 'Treinador falando com jornalistas em coletiva',
    },
    {
        id: 3,
        category: 'Campeonato nacional',
        title: 'Rodada decisiva promete mudar a disputa pelas primeiras posições',
        description: 'Confrontos diretos e equipes em boa fase aumentam a expectativa para os próximos jogos do campeonato.',
        publishedAt: 'Ontem, 21:40',
        readTime: '6 min de leitura',
        author: 'Redação MatchNews',
        img: testImage,
        imgAlt: 'Entrevista coletiva antes de uma partida de futebol',
    },
    {
        id: 4,
        category: 'Futebol europeu',
        title: 'Preparação para a Champions entra na reta final',
        description: 'Treinadores ajustam detalhes antes dos confrontos que podem decidir o futuro das equipes na competição.',
        publishedAt: 'Ontem, 18:20',
        readTime: '3 min de leitura',
        author: 'Redação MatchNews',
        img: testImage,
        imgAlt: 'Técnico durante coletiva de imprensa da Champions League',
    },
    {
        id: 5,
        category: 'Entrevista',
        title: 'Técnico explica mudanças e projeta os próximos desafios',
        description: 'Em entrevista coletiva, o comandante analisou a evolução do elenco e falou sobre o calendário da equipe.',
        publishedAt: 'Ontem, 15:10',
        readTime: '7 min de leitura',
        author: 'Redação MatchNews',
        img: testImage,
        imgAlt: 'Técnico respondendo perguntas em uma coletiva de imprensa',
    },
    {
        id: 6,
        category: 'Categorias de base',
        title: 'Jovens talentos ganham espaço e chamam atenção da comissão técnica',
        description: 'Atletas formados no clube aproveitam oportunidades e se aproximam de uma vaga definitiva no time principal.',
        publishedAt: 'Segunda, 11:00',
        readTime: '4 min de leitura',
        author: 'Redação MatchNews',
        img: testImage,
        imgAlt: 'Comissão técnica em entrevista sobre a formação da equipe',
    },
]

function NewsListing() {
    return (
        <div className={styles.page}>
            <nav className={styles.navigation} aria-label="Navegação da página">
                <Link className={styles.brand} to="/" aria-label="Ir para a página inicial do MatchNews">
                    <span className={styles.brandMark}>MN</span>
                    <span>MatchNews</span>
                </Link>

                <Link className={styles.registerLink} to="/cadastro-noticias">
                    <MdAdd aria-hidden="true" />
                    Nova notícia
                </Link>
            </nav>

            <header className={styles.header}>
                <Link className={styles.backLink} to="/">
                    <MdArrowBack aria-hidden="true" />
                    Voltar ao início
                </Link>

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
                            <strong>{newsItems.length}</strong>
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

                    <span className={styles.resultCount}>{newsItems.length} resultados</span>
                </div>

                <div className={styles.newsGrid}>
                    {newsItems.map((news) => (
                        <NewsListingCard key={news.id} {...news} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default NewsListing
