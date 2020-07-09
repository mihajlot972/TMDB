import styles from './MovieDetails.module.scss'
import { ArrowLeftOutlined, StarOutlined } from '@ant-design/icons';
import Link from 'next/link';

function MovieDetails(props) {

    function formatNumberToCurrency(num) {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(num)
    }

    return (
        <div className={styles.movieDetailsWrapper}>
            <div className={styles.movieDetail}>
                <div className={styles.movieDetailName}>
                    <div className={styles.headerContent}>
                        <div className={styles.header}>
                            <h1>{props.movieDetails.title}</h1>
                        </div>
                        <div className={styles.tagline}>
                            <p>{props.movieDetails.tagline}</p>
                        </div>
                    </div>
                    <div className={styles.rating}>
                        <p>{props.movieDetails.vote_average}</p>
                        <StarOutlined />
                    </div>
                </div>
                <div className={styles.overview}>
                    <div className={styles.description}>
                        <p>{props.movieDetails.overview}</p>
                    </div>
                    <div className={styles.genres}>
                        {props.movieDetails.genres.map(genre => <p key={genre.id}>{genre.name}</p>
                        )}
                    </div>

                </div>
                <h2>Movie Information</h2>
                <div className={styles.movieData}>
                    <div className={styles.revenue}>
                        <p className={styles.microInfo}>Total revenue</p>
                        {formatNumberToCurrency(props.movieDetails.revenue)}
                    </div>
                    <div className={styles.budget}>
                        <p className={styles.microInfo}>Total budget</p>
                        {formatNumberToCurrency(props.movieDetails.budget)}
                    </div>
                    <div className={styles.popularity}>
                        <p className={styles.microInfo}>Popularity</p>
                        {props.movieDetails.popularity}
                    </div>
                    <div className={styles.runtime}>
                        <p className={styles.microInfo}>Runtime</p>
                        {props.movieDetails.runtime} minutes
                    </div>
                    <div className={styles.release_date}>
                        <p className={styles.microInfo}>Release date</p>
                        {props.movieDetails.release_date}
                    </div>
                </div>
                <Link href='/'>
                    <div className={styles.goBack}>
                        <ArrowLeftOutlined />
                        <p>Go back</p>
                    </div>
                </Link>

            </div>


        </div>
    )
}

export default MovieDetails;