import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/moviesApi';
import PageHeading from 'components/PageHeading';

export default function HomePageView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id} id={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
