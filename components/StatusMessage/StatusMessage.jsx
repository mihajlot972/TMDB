import styles from './StatusMessage.module.scss'

function StatusMessage({ children }) {
    return (
        <div className={styles.statusMessageWrapper}>
            <div className={styles.statusMessage}>
                {children}
            </div>
        </div>
    )
}

export default StatusMessage