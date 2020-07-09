import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { getPopularMovies, searchMovie } from '../services/movie-service';
import MovieCard from '../components/MovieCard/MovieCard';
import Layout from '../components/Layout/Layout';
import LoadMore from '../components/Shared/LoadMore/LoadMore';
import Search from '../components/Shared/Search/Search';
import EmptyItem from '../components/EmptyItem/EmptyItem';


export async function getStaticProps() {
  const popularMovies = await getPopularMovies();
  return { props: { popularMovies } }
}

export default function Home({ popularMovies }) {
  const [page, setPage] = useState(2);
  const [currentMovies, setCurrentMovies] = useState(popularMovies.results);
  const [search, setSearch] = useState("");
  let searchTimeout;

  useEffect(() => {
    if (search.length <= 1) {
      setCurrentMovies(popularMovies.results)
    }
  }, [search])

  async function paginate() {
    const paginatedMovies = await getPopularMovies(page);
    console.log(paginatedMovies.results);
    setCurrentMovies([...currentMovies, ...paginatedMovies.results]);
    setPage(page => page + 1);
  }

  async function handleSearch(event) {
    event.persist();

    // Adding timeout for performance reasons
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
        <Search placeholder="search for movies" onChange={(event) => handleSearch(event)} />
        <Head>
          <title>Movie App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
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
          </div> : <EmptyItem>Sorry, couldn't find any movie regarding this keyword :/</EmptyItem>}
          {search.length === 0 ? <LoadMore paginate={paginate} /> : null}
        </main>
      </Layout>
    </div>
  )
}

