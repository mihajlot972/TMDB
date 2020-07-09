import React, { useState } from 'react';
import { createRequestToken, createAccessToken } from '../../services/auth-service';
import { markFavoriteMovie } from '../../services/movie-service';
import styles from './AddToFavorites.module.scss';
import { HeartOutlined } from '@ant-design/icons';
import ReactTooltip from "react-tooltip";
import Modal from '../Modal/Modal';
import Button from '../Shared/Button/Button';
import { stubFalse, remove } from 'lodash';

function AddToFavorites({ movieId }) {
    const [isModal, setModal] = useState(false);
    const [requestURL, setRequestURL] = useState("");
    const [success, setSuccess] = useState("");
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    async function addFavorite() {
        let access_token = localStorage.getItem("access_token");
        let account_id = localStorage.getItem("account_id");
        let session_id = localStorage.getItem("session_id");

        if (!access_token) {
            setModal(true)
            let requestToken = await createRequestToken();
            localStorage.setItem('request_token', requestToken.request_token);
            setRequestURL(`https://www.themoviedb.org/auth/access?request_token=${requestToken.request_token}`)
        } else {
            let markFavorite = await markFavoriteMovie(movieId, account_id, session_id);
            if (markFavorite.status_message === "Success.") {
                setSuccess("Movie added to your favorites list!");
            }
            if (markFavorite.status_message === "The item/record was updated successfully.") {
                setSuccess("This movie is in your favorite list")
            }
        }
    }

    async function removeFavorite() {
        let account_id = localStorage.getItem("account_id");
        let session_id = localStorage.getItem("session_id");
        let markFavorite = await markFavoriteMovie(movieId, account_id, session_id, false);
        if(markFavorite.status_message === "The item/record was deleted successfully.") {
            setSuccess("Movie removed from favorites")
            setDeleteSuccess(true)
        }
    }

    return (
        <div className={styles.addToFavoritesWrapper}>
            <Modal
                isVisible={isModal}
                title="We need to authorize you first"
                content={<a href={requestURL} target='_blank'>Click here to approve account usage</a>}
                footer={<Button onClick={() => setModal(stubFalse)}>Not now</Button>}
                onClose={() => setModal(false)}
            />
            <ReactTooltip />
            <div className={styles.addToFavorites}>
                {success.length > 0 ? <div className={styles.heartPressed}>
                    {success}
                    {!deleteSuccess ? <p className={styles.removeFavorite} onClick={removeFavorite}>Remove it?</p> : null}
                </div> : <HeartOutlined onClick={addFavorite} data-tip="Love this movie? Add it to favorites!" />
                }
            </div>
        </div>
    )
}


export default AddToFavorites;