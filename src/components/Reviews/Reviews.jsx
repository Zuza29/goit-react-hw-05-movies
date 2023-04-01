import fetchData from 'utils/fetchData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import 'components/MovieDetails/MovieDetails.module.css';

 const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=16b877ef666ac997a00ad8a16d1abc88&language=en-US`;

  useEffect(() => {
    setIsLoading(true);
    const getReviews = async () => {
      const reviewsResults = await fetchData(URL);
      if (reviewsResults) {
        setIsLoading(false);
        const results = [...reviewsResults.results];
        results.map(review => ({
          content: review.content,
          author: review.author,
          id: review.id,
        }));
        setReviews(results);
      } else {
        throw new Error('Something went wrong...');
      }
    };
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <h2>Reviews</h2>
      <ul>
        {reviews && reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>There are no reviews yet</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;

