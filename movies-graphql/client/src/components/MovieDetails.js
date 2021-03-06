import {useQuery} from '@apollo/client';
import {GET_MOVIE_QUERY} from '../queries/queries';

function MovieDetails({ selectedMovie }) {
    const { data } = useQuery(GET_MOVIE_QUERY, {
        variables: {id: selectedMovie}
    });

    const renderMovieDetails = () => {
        const { movie } = data || {}

        if(movie) {
            return(
                <div>
                    <h2>{movie.name}</h2>
                    <p>{movie.genre}</p>
                    <p>Directed By: {movie.director.name}</p>
                    <p>Other movies by this director</p>
                    <ul>
                        {movie.director.movies.map(movie => {
                            return <li key={movie.id}>{movie.name}</li>
                        })}
                    </ul>
                </div>
            )
        } else {
            return <div>
                <h3>Please select a Movie</h3>
            </div>
        }
    }

    return(
        <div>{renderMovieDetails()}</div>
    );
}

export default MovieDetails;