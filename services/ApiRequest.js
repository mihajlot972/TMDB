import axios from 'axios';
import setDefaults from './helper';
import api from '../config/tmdb-api.json'

/**
 * [Adapter for creating requests in other modules using axios]
 * @return {Promise<data>} returns response promise
 */
async function makeApiRequest(options) {
    return new Promise((resolve, reject) => {
        // Setting default options if nothing is provided
        let defaults = {
            url: `${api.popular_movies}`,
            method: 'GET',
            api_key: api.api_key,
            page: 1,
            query: undefined,
            authorization: "",
            request_token: "",
            session_id: "",
        }
        options = setDefaults(options, defaults);
        // Making request to the backend
        axios({
                url: options.url,
                method: options.method,
                params: {
                    api_key: options.api_key,
                    page: options.page,
                    query: options.query,
                    session_id: options.session_id,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': options.authorization
                },
            })
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
    });
}

// API giving error if called with data option, thus this as quick fix.
async function postWithBody(options) {
    return new Promise((resolve, reject) => {
        // Setting default options if nothing is provided
        let defaults = {
            url: `${api.popular_movies}`,
            method: 'GET',
            api_key: api.api_key,
            page: 1,
            query: undefined,
            authorization: "",
            request_token: "",
            redirect_to: "",
            access_token: "",
            media_type: "",
            media_id: "",
            favorite: true,
            session_id: "",
        }
        options = setDefaults(options, defaults);
        // Making request to the backend
        axios({
                url: options.url,
                method: options.method,
                params: {
                    api_key: options.api_key,
                    page: options.page,
                    query: options.query,
                    session_id: options.session_id,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': options.authorization
                },
                data: {
                    request_token: options.request_token,
                    redirect_to: options.redirect_url,
                    access_token: options.access_token,
                    media_id: options.media_id,
                    media_type: options.media_type,
                    favorite: options.favorite,
                }
            })
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
    });
}

export { postWithBody }
export default makeApiRequest