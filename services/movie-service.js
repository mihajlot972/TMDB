import api from '../config/tmdb-api.json';
import makeApiRequest, { postWithBody } from './ApiRequest';

// Potentionally could be transformed to factory function
// for getting Movie data 

async function getPopularMovies(page) {
    try {
        const popularMovies = await makeApiRequest({
            url: api.popular_movies,
            method: 'GET',
            page: page,
        })
        return popularMovies
    } catch (err) {
        throw err;
    }
}

async function getTopRatedMovies(page) {
    try {
        const topRatedMovies = await makeApiRequest({
            url: api.top_rated_movies,
            method: 'GET',
            page: page
        })
        return topRatedMovies
    } catch (err) {
        throw err;
    }
}

async function getMovieDetails(movieId) {
    try {
        const movieDetails = await makeApiRequest({
            url: api.movie_details + movieId,
            method: 'GET'
        })
        return movieDetails
    } catch (err) {
        throw err;
    }
}

async function getUpcomingMovies(page) {
    try {
        const upcomingMovies = await makeApiRequest({
            url: api.upcoming_movies,
            method: 'GET',
            page: page
        })
        return upcomingMovies
    } catch (err) {
        throw err;
    }
}

async function searchMovie(searchText) {
    // Fallback for instant text input removal
    if (searchText.length === 0) {
        return {results: []};
    }
    try {
        const searchMovies = await makeApiRequest({
            url: api.search_movies,
            method: 'GET',
            query: searchText
        });
        return searchMovies;
    } catch (err) {
        console.log(err);
    }
}

async function getFavoriteMovies(account_id, session_id) {
    console.log(account_id)
    console.log(session_id)
    try {
        const favoriteMovies = await makeApiRequest({
            url: `${api.favorite_movies}${account_id}/favorite/movies`,
            method: 'GET',
            session_id: session_id
        })
        return favoriteMovies
    } catch (err) {
        throw err;;
    }
}

async function markFavoriteMovie(movie_id, account_id, session_id, favorite=true) {
    try {
        const addToFavorite = await postWithBody({
            url: `${api.mark_favorite}${account_id}/favorite`,
            method: 'POST',
            media_id: movie_id,
            favorite: favorite,
            media_type: 'movie',
            session_id: session_id,
        })
        return addToFavorite
    } catch (err) {
        throw err;
    }
}

export {
    getPopularMovies,
    getTopRatedMovies,
    getMovieDetails,
    getUpcomingMovies,
    getFavoriteMovies,
    markFavoriteMovie,
    searchMovie
}