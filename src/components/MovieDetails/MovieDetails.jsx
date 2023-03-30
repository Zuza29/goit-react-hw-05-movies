import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from 'utils/fetchData';
import fetchParams from 'constants/fetchParams';

export const MovieDetails = () => {
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
    console.log(details);
  }, [id]);

  console.log(details);
  return (
    <section>
      {details.poster_path &&
        <img
          src={`${fetchParams.IMAGE_BASE}${details.poster_path}`}
          alt="Movie poster"
        />}
      <article>
        <h2>{details.title}</h2>
        <ul>
          <li>
            <h3>User rating: </h3>
            <span>{details.vote_average}</span>
          </li>
          <li>
            <h3>Genres: </h3>
            {details.genres !== undefined && <span>{`${details.genres
              .map(genre => genre.name)
              .join(' / ')}`}</span>}
          </li>
        </ul>
        <h3>Overview</h3>
        <p>{details.overview}</p>
      </article>
    </section>
  );

  // vote_average
  // overview, genres, cast, reviews
};
