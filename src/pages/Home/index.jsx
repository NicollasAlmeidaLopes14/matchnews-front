import { Link } from 'react-router-dom'
import styles from './styles.module.css'

import LastNewsCard from '../../components/LastNewsCard'

import { FaArrowRight, FaRegClock } from "react-icons/fa";


function Home() {

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.breakingNewsContainer}>

          <div className={styles.breakingNewsContent}>
            <span className={styles.breakingNewsBadge}>Breaking news</span>

            <h2 className={styles.breakingNewsTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae perferendis optio ad.</h2>
            <p className={styles.breakingNewsDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic ipsum exercitationem atque molestiae illo perferendis quas magnam.
            </p>
          </div>
        </div>

        <aside>
          <div>
            <span className={styles.transferRumorBadge}>Rumor transferencia</span>

            <h2 className={styles.rightNewsTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic accusantium possimus porro quaerat cupiditate amet</h2>

            <span className={styles.newsClock}>
              <FaRegClock />
              2 horas atrás
            </span>
          </div>

          <div>
            <span className={styles.injuryBadge}>Atualização lesão</span>

            <h2 className={styles.rightNewsTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut qui impedit nemo et doloremque.</h2>

            <span className={styles.newsClock}>
              <FaRegClock />
              5 horas atrás
            </span>
          </div>
        </aside>
      </main>

      <section>
        <div className={styles.lastNewsHeader}>
          <h1 className={styles.lastNewsTitle}>Últimas Notícias</h1>

          <div className={styles.linkWrapper}>
            <Link className={styles.allNewsLink}>
              Ver todas
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className={styles.lastNewsContainer}>
          <LastNewsCard
            topico={'Premier League'}
            titulo={'Lorem ipsum dolor sit amet consectetur adipisicing elit. '}
            descricao={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam a nostrum necessitatibus unde ipsum. Delectus magni iusto possimus'}
            visualizacoes={'10k visualizações'}
          />

          <LastNewsCard
            topico={'La liga'}
            titulo={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            descricao={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam a nostrum necessitatibus unde ipsum. Delectus magni iusto possimus'}
            visualizacoes={'20k visualizações'}
          />

          <LastNewsCard
            topico={'Ligue one'}
            titulo={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            descricao={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam a nostrum necessitatibus unde ipsum. Delectus magni iusto possimus'}
            visualizacoes={'15k visualizações'}
          />
        </div>
      </section>
    </div>
  )
}

export default Home