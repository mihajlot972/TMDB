import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import EmptyItem from '../../components/EmptyItem/EmptyItem'
import MovieCard from '../../components/MovieCard/MovieCard'
import { getFavoriteMovies } from '../../services/movie-service';

function FavoriteMovies() {
    let _isMounted = true;
    const [loading, setLoading] = useState(false);
    const [currentMovies, setCurrentMovies] = useState([]);
    const [favoriteMoviesStatus, setFavoriteMoviesStatus] = useState("");

    useEffect(() => {
        // TODO: use cookies instead of localstorage 
        const access_token = localStorage.getItem('access_token');
        const session_id = localStorage.getItem("session_id");
        const account_id = localStorage.getItem("account_id");
        if (access_token) {
            fetchFavoriteMovies(account_id, session_id);
            setFavoriteMoviesStatus("Your favorite list is empty.")
        } else {
            setFavoriteMoviesStatus("You need to authenticate to be able to add and see favorite movies")
        }
        return () => {
            _isMounted = false;
        }
    }, [])

    async function fetchFavoriteMovies(account_id, session_id) {
        setLoading(true);
        let movies = await getFavoriteMovies(account_id, session_id)
        setLoading(false);
        setCurrentMovies(movies.results)
    };

    return (
        <Layout>
            <Head>
                <title>List of Favorite Movies</title>
            </Head>
            <div style={{ color: 'white' }}>
                {
                    loading ? <EmptyItem>Loading movies from the API...</EmptyItem> :
                        currentMovies.length === 0 ? <EmptyItem>{favoriteMoviesStatus}</EmptyItem> : currentMovies.map(movie => {
                            return <MovieCard
                                key={movie.id}
                                id={movie.id}
                                poster_path={movie.poster_path}
                                title={movie.title}
                                overview={movie.overview}
                                release_date={movie.release_date}
                                vote_average={movie.vote_average} />
                        })

                }

            </div>
        </Layout>
    )
}

export default FavoriteMovies