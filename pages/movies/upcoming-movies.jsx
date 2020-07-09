import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import LoadMore from '../../components/Shared/LoadMore/LoadMore';
import { getUpcomingMovies, searchMovie } from '../../services/movie-service';
import Search from '../../components/Shared/Search/Search';

export async function getStaticProps() {
    const upcomingMovies = await getUpcomingMovies();
    return { props: { upcomingMovies } }
}

export default function UpcomingMovies({ upcomingMovies }) {
    const [page, setPage] = useState(2);
    const [search, setSearch] = useState("");
    const [currentMovies, setCurrentMovies] = useState(upcomingMovies.results);
    let searchTimeout;

    useEffect(() => {
        if (search.length <= 1) {
            setCurrentMovies(upcomingMovies.results)
        }
    }, [search])

    async function paginate() {
        const paginatedMovies = await getUpcomingMovies(page)
        setCurrentMovies([...currentMovies, ...paginatedMovies.results])
        setPage(page => page + 1);
    }

    async function handleSearch(event) {
        event.persist();

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(async () => {
            let searchValue = event.target.value;
            setSearch(searchValue);

            if (searchValue.length > 1) {
                let searchedQuery = await searchMovie(searchValue);
                if (searchedQuery.results) {
                    searchedQuery.results.sort((a, b) => {
                        return b.vote_average - a.vote_average;
                    })
                    setCurrentMovies(searchedQuery.results)
                }
            }
        }, 500);
    }

    return (
        <div>
            <Layout>
                <Search onChange={handleSearch} placeholder="search for movies" />
                <Head>
                    <title>Upcoming Movies</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {currentMovies.length > 0 ? <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {currentMovies.map(movie => {
                        return (
                            <div key={movie.id} className="movie-col">
                                <MovieCard
                                    id={movie.id}
                                    poster_path={movie.poster_path}
                                    title={movie.title}
                                    overview={movie.overview}
                                    release_date={movie.release_date}
                                    vote_average={movie.vote_average}
                                />
                            </div>
                        )
                    })}
                </div> : <StatusMessage>Sorry, couldn't find any movie regarding this keyword :/</StatusMessage>}
                <LoadMore paginate={paginate} />
            </Layout>
        </div>


    )
}
