import api from '../config/tmdb-api.json';
import { postWithBody } from './ApiRequest';

async function createRequestToken() {
    try {
        const requestToken = await postWithBody({
            url: "https://api.themoviedb.org/4/auth/request_token?api_key=cbdc69d1fd1a96c48e45fa67e4180d07",
            method: 'POST',
            authorization: `${api.api_bearer}`,
            redirect_url: "http://localhost:3000/auth/auth-success" 
        })
        return requestToken;
    } catch (err) {
        throw err;
    }
}

async function createAccessToken(requestToken) {
    try {
        const accessToken = await postWithBody({
            url: api.access_token,
            method: 'POST',
            authorization: `${api.api_bearer}`,
            request_token: requestToken
        })
        return accessToken;
    } catch (err) {
        throw err;
    }
}

async function createSessionId(access_token) {
    try {
        const sessionId = await postWithBody({
            url: api.session_id,
            method: 'POST',
            access_token: access_token
        })
        return sessionId
    } catch (err) {
        throw err;
    }
}

export {
    createRequestToken,
    createAccessToken,
    createSessionId
};