import styles from './MovieCard.module.scss'
import AddToFavorites from '../AddToFavorites/AddToFavorites';
import { StarOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Button from '../Shared/Button/Button';

function MovieCard({ title, id, release_date, overview, vote_average }) {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <div>
                    <div className={styles.cardHeader}>
                        <h1>{title}</h1>
                        <hr />
                    </div>
                    <p className={styles.overview}>overview</p>
                    <div className={styles.cardBody}>
                        <p>{overview}</p>
                    </div>
                </div>
                <div>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardFooterLeft}>
                            <StarOutlined />
                            <p className={styles.vote}>{vote_average}</p>
                        </div>
                        <div className={styles.cardFooterRight}>
                            <p>Release date</p>
                            <p>{release_date}</p>
                        </div>
                    </div>
                    <AddToFavorites movieId={id} />
                </div>
            </div>
            <div className={styles.movieDetails}>
                <Link href='/movies/[movie_id]' as={`/movies/${id}`}>
                    <div>
                        <Button>See Movie Details</Button>
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default MovieCard;