import styles from './EmptyItem.module.scss'

function EmptyItem({ children }) {
    return (
        <div className={styles.emptyWrapper}>
            <div className={styles.empty}>
                {children}
            </div>
        </div>
    )
}

export default EmptyItem