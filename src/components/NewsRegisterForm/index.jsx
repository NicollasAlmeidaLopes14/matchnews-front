import styles from './styles.module.css'

function NewRegisterForm({ titulo, marginBottom, height, width, children }) {
    return (
        <div className={styles.container} style={{ '--container-width': width, '--container-height': height, '--container-margin': marginBottom }}>
            <h2 className={styles.title}>{titulo}</h2>

            <>
                {children}
            </>
        </div>
    )
}

export default NewRegisterForm;