import styles from './styles.module.css'

import NewsListingCard from '../../components/NewsListingCard';

import testImage from '../../assets/Tecnico-do-Benfica-Jose-Mourinho-em-coletiva-de-imprensa-da-Champions-League-scaled-aspect-ratio-512-320-1.webp'

import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function NewsListing() {
    return (
        <div className={styles.container}>
            <aside className={styles.aside}>
                <Link className={styles.link} to={'/'}>
                    <FaArrowLeft />
                    Voltar
                </Link>

                <div className={styles.filtersContainer}>
                    <h2 className={styles.filtersTitle}>Filtros</h2>

                    <div style={{ position: 'relative' }}>
                        <FaSearch className={styles.serachIcon} />
                        <input className={styles.serachInput} type="search" placeholder="Buscar nas notícias..." />
                    </div>

                    <div className={styles.categoryContainer}>
                        <span className={styles.categorySpan}>Categoria</span>

                        <label htmlFor="trasnfer-input" className={styles.categoryLabel}>
                            <input className={styles.checkboxInput} type="checkbox" id='trasnfer-input' />
                            Transferências
                        </label>

                        <label htmlFor="results-input" className={styles.categoryLabel}>
                            <input className={styles.checkboxInput} type="checkbox" id='results-input' />
                            Resultados
                        </label>

                        <label htmlFor="analysis-input" className={styles.categoryLabel}>
                            <input className={styles.checkboxInput} type="checkbox" id='analysis-input' />
                            Análises
                        </label>
                    </div>
                </div>
            </aside>

            <div className={styles.mainWrapper}>
                <h1 className={styles.title}>Todas as Notícias</h1>

                <main className={styles.mainContent}>
                    <NewsListingCard
                        category={'Análise Tática'}
                        title={'Tática em Jogo: Como a nova formação mudou a dinâmica da equipe'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt aut perferendis beatae, tempora fugiat voluptatem numquam labore. Eos vitae tempora voluptatem deleniti delectus nesciunt nemo? Omnis voluptatum aperiam tempore!'}
                        img={testImage}
                    />

                    <NewsListingCard
                        category={'Análise Tática'}
                        title={'Tática em Jogo: Como a nova formação mudou a dinâmica da equipe'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt aut perferendis beatae, tempora fugiat voluptatem numquam labore. Eos vitae tempora voluptatem deleniti delectus nesciunt nemo? Omnis voluptatum aperiam tempore!'}
                        img={testImage}
                    />

                    <NewsListingCard
                        category={'Análise Tática'}
                        title={'Tática em Jogo: Como a nova formação mudou a dinâmica da equipe'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt aut perferendis beatae, tempora fugiat voluptatem numquam labore. Eos vitae tempora voluptatem deleniti delectus nesciunt nemo? Omnis voluptatum aperiam tempore!'}
                        img={testImage}
                    />


                    <NewsListingCard
                        category={'Análise Tática'}
                        title={'Tática em Jogo: Como a nova formação mudou a dinâmica da equipe'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt aut perferendis beatae, tempora fugiat voluptatem numquam labore. Eos vitae tempora voluptatem deleniti delectus nesciunt nemo? Omnis voluptatum aperiam tempore!'}
                        img={testImage}
                    />


                    <NewsListingCard
                        category={'Análise Tática'}
                        title={'Tática em Jogo: Como a nova formação mudou a dinâmica da equipe'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt aut perferendis beatae, tempora fugiat voluptatem numquam labore. Eos vitae tempora voluptatem deleniti delectus nesciunt nemo? Omnis voluptatum aperiam tempore!'}
                        img={testImage}
                    />


                    <NewsListingCard
                        category={'Análise Tática'}
                        title={'Tática em Jogo: Como a nova formação mudou a dinâmica da equipe'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deserunt aut perferendis beatae, tempora fugiat voluptatem numquam labore. Eos vitae tempora voluptatem deleniti delectus nesciunt nemo? Omnis voluptatum aperiam tempore!'}
                        img={testImage}
                    />
                </main>
            </div>
        </div>
    )
}

export default NewsListing;