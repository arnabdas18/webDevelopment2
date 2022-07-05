import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_DIRECTORS_QUERY, ADD_MOVIE_MUTATION, GET_MOVIES_QUERY } from '../queries/queries';

function AddMovie() {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [directorId, setDirectorId] = useState("");
    const [addMovie] = useMutation(ADD_MOVIE_MUTATION);
    const {loading, data, error} = useQuery(GET_DIRECTORS_QUERY);

    const renderDirectors = () => {
        if(loading) {
            return <option disabled>Loading...</option>
        } else if(error) {
            return <option disabled>Something went wrong!</option>
        } else {
            return data.directors.map(director => {
                return <option key={director.id} value={director.id}>{director.name}</option>
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie({
            variables: {
                name,
                genre,
                directorId
            },
            refetchQueries: [{query: GET_MOVIES_QUERY}]
        });
    }

    return (
        <form id="add-movie" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="movie-name">Movie Name:</label>
                <input id="movie-name" name="movie-name" type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="genre">Genre:</label>
                <input id="genre" name="genre" type="text" onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div>
                <label htmlFor="director">Director:</label>
                <select name="director" id="director" onChange={(e) => setDirectorId(e.target.value)}>
                    <option>Select a director</option>
                    {renderDirectors()}
                </select>
            </div>
            <div>
                <button type="submit">Add New Movie</button>
            </div>
        </form>
    );
  }
  
  export default AddMovie;