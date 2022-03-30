import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/moviesApi';
import PageHeading from 'components/PageHeading';

export default function MovieDetailsPageView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieDetails(movieId).then(response =>
      setMovie(response.data)
    );
  }, [movieId]);

  return (
    <>
      <PageHeading text="Movie Details Page" />
    </>
  );
}
