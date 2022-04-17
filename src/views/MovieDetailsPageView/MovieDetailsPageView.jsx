import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/moviesApi';
import PageHeading from 'components/PageHeading';
import ButtonLink from 'components/ButtonLink';
import MovieDetails from 'components/MovieDetails';
import {
  MovieDetailsWrapper,
  Line,
  BtnWrapper,
} from './MovieDetailsPageView.styled';

export default function MovieDetailsPageView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(response => setMovie(response.data));
  }, [movieId]);

  const fromPage = location.state?.from ?? '/';

  const { title } = movie;

  const isEmpty = Object.keys(movie).length === 0;

  return (
    <>
      {!isEmpty && (
        <>
          <PageHeading text={title} />
          <ButtonLink to={fromPage} text="Go Back" />
          <MovieDetailsWrapper>
            <MovieDetails movieData={movie} />
            <Line />
            <BtnWrapper>
              <ButtonLink to="cast" text="Cast" state={{ from: fromPage }} />
              <ButtonLink
                to="reviews"
                text="Reviews"
                state={{ from: fromPage }}
              />
            </BtnWrapper>
            <Outlet />
          </MovieDetailsWrapper>
        </>
      )}
    </>
  );
}
