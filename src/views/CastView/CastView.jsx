import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/moviesApi';

export default function CastView() {
  let { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(response => setCast(response.data.cast));
  }, [movieId]);

  const reducedCast = [...cast].slice(0, 10);
  console.log(reducedCast);

  return (
    <ul>
      {cast &&
        reducedCast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={name}
              />
              <p>{character}</p>
              <p>{name}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}
