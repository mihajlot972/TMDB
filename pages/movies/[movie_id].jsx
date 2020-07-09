import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Head from 'next/head';
import { getMovieDetails } from '../../services/movie-service';

export async function getServerSideProps(context) {
   const id = context.query.movie_id
   const movieDetails = await getMovieDetails(id)
   return { props: { movieDetails } }
}

function Details({ movieDetails }) {
   return (
      <div className="movie-details">
         <Head>
            <title>{movieDetails.title}</title>
         </Head>
         <MovieDetails movieDetails={movieDetails} />
      </div>
   )
}

export default Details
