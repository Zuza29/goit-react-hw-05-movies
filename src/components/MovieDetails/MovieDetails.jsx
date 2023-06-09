import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import fetchData from 'utils/fetchData';
import css from './MovieDetails.module.css';

 const MovieDetails = () => {
  const [details, setDetails] = useState([]);

  const queryParams = useParams();
  const id = queryParams.movieId;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=16b877ef666ac997a00ad8a16d1abc88`;

  useEffect(() => {
    const getDetails = async () => {
      const detailsResults = await fetchData(URL);
      setDetails(detailsResults);
    };
    getDetails();
  }, [URL]);

  return (
    <>
      <section className={css.movieDetailsWrapper}>
        {details.poster_path && (
          <img
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : `https://bitsofco.de/content/images/2018/12/broken-1.png`
            }
            alt={details.title}
          />
        )}
        <article>
          <h2>{details.title}</h2>
          <ul>
            <li>
              <h3>User rating: </h3>
              <span>{details.vote_average}</span>
            </li>
            <li>
              <h3>Genres: </h3>
              {details.genres !== undefined && (
                <span>{`${details.genres
                  .map(genre => genre.name)
                  .join(' | ')}`}</span>
              )}
            </li>
          </ul>
        </article>
      </section>
      <section className={css.extraInfoWrapper}>
        <h3>Overview</h3>
        <p>{details.overview}</p>
        <h3>Extra information</h3>
        <article className={css.buttonsWrapper}>
          <Link to="cast">
            <button type="button">Cast</button>
          </Link>
          <Link to="reviews">
            <button type="button">Reviews</button>
          </Link>
        </article>
        <Outlet />
      </section>
    </>
  );
};

export default MovieDetails;
