import styles from './Search.module.scss';

function Search({ onChange, placeholder }) {
    return (
        <div className={styles.searchWrapper}>
            <div className={styles.search}>
                <input onChange={onChange} placeholder={placeholder}></input>
            </div>
        </div>

    )
}


export default Search;