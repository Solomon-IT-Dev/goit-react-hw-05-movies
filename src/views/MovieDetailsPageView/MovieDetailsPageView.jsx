import { useState, useEffect } from 'react';
import { NavLink, useParams, useNavigate, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/moviesApi';
import PageHeading from 'components/PageHeading';
// import Loader from 'components/Loader';

export default function MovieDetailsPageView() {
  let { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieDetails(movieId).then(response => setMovie(response.data));
  }, [movieId]);

  const goBack = () => navigate(-1);

  const {
    poster_path,
    genres,
    overview,
    release_date,
    status,
    title,
    vote_average,
  } = movie;

  return (
    <>
      <PageHeading text="Movie Details Page" />
      <button onClick={goBack}>Go back</button>
      {movie && (
        <>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          )}
          <h2>{title}</h2>
          <ul></ul>
          {genres && (
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          )}
          <p>{status}</p>
          <p>{release_date}</p>
          <p>{vote_average}</p>
          <p>{overview}</p>

          <hr />
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
          <hr />

          {/* <Suspense fallback={<Loader />}> */}
          <Outlet />
          {/* </Suspense> */}
        </>
      )}
    </>
  );
}
