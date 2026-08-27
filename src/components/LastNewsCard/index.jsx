import styles from './styles.module.css'

import cardImage from '../../assets/Tecnico-do-Benfica-Jose-Mourinho-em-coletiva-de-imprensa-da-Champions-League-scaled-aspect-ratio-512-320-1.webp'

import { FaRegEye } from "react-icons/fa6";

function LastNewsCard({ topico, titulo, descricao, visualizacoes }) {
    return (
        <div className={styles.container}>
            <span className={styles.topicBadge}>{topico}</span>

            <img src={cardImage} className={styles.cardImage} alt="" />

            <div className={styles.cardTextContainer}>
                <h2 className={styles.cardTitle}>{titulo}</h2>
                <p className={styles.cardDescription}>{descricao}</p>
            </div>

            <span className={styles.totalViews}> <FaRegEye /> {visualizacoes}</span>
        </div>
    )
}

export default LastNewsCard;