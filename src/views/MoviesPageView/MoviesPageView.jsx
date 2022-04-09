import { useState, useEffect } from 'react';
import usePrevious from 'hooks/usePrevious';
import { fetchSearchMovie } from 'services/moviesApi';
import * as notify from 'utils/notifications';
import PageHeading from 'components/PageHeading';
import SearchForm from 'components/SearchForm';
import MoviesGallery from 'components/MoviesGallery';
import { TextWrapper, WelcomeText } from './MoviesPageView.styled';

export default function MoviesPageView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const prevSearchQuery = usePrevious(searchQuery);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchSearchMovie(searchQuery)
      .then(response => {
        const { results, total_results } = response.data;

        if (total_results === 0) {
          notify.showIncorrectQuery(searchQuery);
          moviesReset();
          return;
        }

        notify.showSearchResult(total_results);
        setMovies(results);
      })
      .catch(error => {
        return notify.showQueryError(error);
      });
  }, [searchQuery]);

  const moviesReset = () => {
    setMovies([]);
  };

  const onFormSubmit = searchQuery => {
    if (searchQuery === '') {
      notify.showSearchQueryAbsence();
      return;
    }

    if (prevSearchQuery === searchQuery) {
      notify.showSearchQueryRepeat(searchQuery);
      return;
    }

    setSearchQuery(searchQuery);
    moviesReset();
  };

  return (
    <>
      <PageHeading text="Movies" />
      <SearchForm onSubmit={onFormSubmit} />
      {movies.length > 0 ? (
        <MoviesGallery moviesSet={movies} />
      ) : (
        <TextWrapper>
          <WelcomeText>
            All filmmakers are waiting for your search query to show movies.
          </WelcomeText>
        </TextWrapper>
      )}
    </>
  );
}
