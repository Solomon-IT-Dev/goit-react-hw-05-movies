import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';

export default function ReviewsView() {
  let { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(response =>
      setReviews(response.data.results)
    );
  }, [movieId]);
  console.log(reviews);

  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
}
