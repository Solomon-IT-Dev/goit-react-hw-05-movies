import { Routes, Route } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import HomePageView from 'views/HomePageView';
import MoviesPageView from 'views/MoviesPageView';
import MovieDetailsPageView from 'views/MovieDetailsPageView';
import NotFoundView from 'views/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/movies" element={<MoviesPageView />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPageView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Container>
  );
}
