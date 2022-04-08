import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/moviesApi';
import PageHeading from 'components/PageHeading';
import { MoviesList, MovieItem, MovieImg } from './HomePageView.styled';

export default function HomePageView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      <MoviesList>
        {movies.length > 0 &&
          movies.map(({ id, poster_path, title, vote_average }) => (
            <MovieItem key={id} id={id}>
              <Link to={`/movies/${id}`}>
                <MovieImg
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                />
                <h3>{title}</h3>
                <span>{vote_average}</span>
              </Link>
            </MovieItem>
          ))}
      </MoviesList>
    </>
  );
}
