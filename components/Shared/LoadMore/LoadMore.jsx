import styles from './LoadMore.module.scss';
import { PlusCircleOutlined } from '@ant-design/icons';

function LoadMore({ paginate }) {
    return (
        <div className={styles.loadMoreWrapper}>
            <div className={styles.loadMore}>
                <div onClick={paginate}>
                    <p>View more movies</p>
                    <PlusCircleOutlined />
                </div>
            </div>
        </div>
    )
};

export default LoadMore;