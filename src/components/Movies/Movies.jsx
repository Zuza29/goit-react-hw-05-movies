import { useState } from 'react';
import fetchData from 'utils/fetchData';
import { Link } from 'react-router-dom';
import { Spinner } from 'components/Spinner/Spinner';

export const Movies = () => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [titles, setTitles] = useState([]);

  const handleSubmit = async event => {
    setIsLoading(true);
    event.preventDefault();
    const movieList = await fetchData(
      `https://api.themoviedb.org/3/search/movie?api_key=16b877ef666ac997a00ad8a16d1abc88&query=${value}`
    );
    if (movieList) {
      setIsLoading(false);
      const results = [...movieList.results];
      results.map(movie => ({
        title: movie.title,
        id: movie.id,
      }));
      results.forEach(result => {
        titles.push({
          movieId: result.id,
          movieTitle: result.title,
        });
      });
    } else {
      throw new Error('Something went wrong...');
    }
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">
        <input id="searchInput" type="text" onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
      <ul>
        {isLoading ? (
          <Spinner />
        ) : (
          titles.length !== 0 &&
          titles.map(movie => (
            <li key={movie.movieId}>
              <Link to={`/movies/${movie.movieId}`}>
                <p>{movie.movieTitle}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </form>
  );
};
