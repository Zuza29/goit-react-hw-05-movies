import fetchData from 'utils/fetchData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'components/Spinner/Spinner';
import css from 'components/MovieDetails/MovieDetails.module.css';

export const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=16b877ef666ac997a00ad8a16d1abc88&language=en-US`;

  useEffect(() => {
    setIsLoading(true);
    const getCast = async () => {
      const castResults = await fetchData(URL);
      if (castResults) {
        setIsLoading(false);
        const results = [...castResults.cast];
        results.map(cast => ({
          id: cast.id,
          profile_path: cast.profile_path,
          original_name: cast.original_name,
          name: cast.name,
          character: cast.character,
        }));
        setCast(results);
      } else {
        throw new Error('Something went wrong...');
      }
    };
    getCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <h2>Cast</h2>
      <ul className={css.castList}>
        {cast && cast.length ? (
          <>
            {cast.map(
              ({ id, profile_path, original_name, name, character }) => (
                <li key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://www.themoviedb.org/t/p/w500/${profile_path}`
                        : `https://www.banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png`
                    }
                    alt={original_name}
                  />
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </li>
              )
            )}
          </>
        ) : (
          <p>There is no cast information available for this movie</p>
        )}
      </ul>{' '}
    </>
  );
};
