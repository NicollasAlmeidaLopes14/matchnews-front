import { MdKeyboardArrowDown } from 'react-icons/md'

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
    const isSelect = Component === 'select'
    const wrapperClassName = [
        hasIcon ? styles.controlWithIcon : '',
        isSelect ? styles.selectWrapper : '',
    ].filter(Boolean).join(' ') || undefined

    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={id}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </label>

            <div className={wrapperClassName}>
                {hasIcon && <span className={styles.fieldIcon}>{icon}</span>}
                <Component
                    className={`${styles.control} ${hasIcon ? styles.withIcon : ''} ${isSelect ? styles.selectControl : ''}`}
                    id={id}
                    name={id}
                    required={required}
                    {...inputProps}
                >
                    {children}
                </Component>
                {isSelect && (
                    <span className={styles.selectIndicator} aria-hidden="true">
                        <MdKeyboardArrowDown />
                    </span>
                )}
            </div>

            {hint && <span className={styles.hint}>{hint}</span>}
        </div>
    )
}

export default FormField
