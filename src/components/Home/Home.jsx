import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchData from 'utils/fetchData';
import { Spinner } from 'components/Spinner/Spinner';

export const Home = () => {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=16b877ef666ac997a00ad8a16d1abc88`;

  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrending = async () => {
    setIsLoading(true);
    const response = await fetchData(URL);
    if (response) {
      setIsLoading(false);
      const results = [...response.results];
      return results.map(movie => ({
        title: movie.title,
        id: movie.id,
      }));
    } else {
      throw new Error('Something went wrong...');
      }
     
  };

  useEffect(() => {
    const getMovies = async () => {
      const fetchResults = await fetchTrending();
      setTitles(fetchResults);
    };
    getMovies();
  }, []);

  return (
    <main>
      <h1>Trending movies</h1>
      <ul>
        {isLoading ? (
          <Spinner />
        ) : (
          titles &&
          titles.length &&
          titles.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <p>{title}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </main>
  );
};
