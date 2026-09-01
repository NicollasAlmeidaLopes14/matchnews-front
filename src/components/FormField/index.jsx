import styles from './styles.module.css'

function FormField({
    id,
    label,
    hint,
    icon,
    as: Component = 'input',
    children,
    required = false,
    ...inputProps
}) {
    const hasIcon = Boolean(icon)

    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={id}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </label>

            <div className={hasIcon ? styles.controlWithIcon : undefined}>
                {hasIcon && <span className={styles.fieldIcon}>{icon}</span>}
                <Component
                    className={`${styles.control} ${hasIcon ? styles.withIcon : ''}`}
                    id={id}
                    name={id}
                    required={required}
                    {...inputProps}
                >
                    {children}
                </Component>
            </div>

            {hint && <span className={styles.hint}>{hint}</span>}
        </div>
    )
}

export default FormField
