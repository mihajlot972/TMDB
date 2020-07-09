import styles from './Button.module.scss';

function Button({ onClick, children }) {
    return (
        <div className={styles.buttonWrapper}>
            <div className={styles.button}>
                <button onClick={onClick}>{children}</button>
            </div>
        </div>

    )
}


export default Button;