import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Layout from 'components/Layout';

const HomePageView = lazy(() =>
  import('views/HomePageView' /* webpackChunkName: "home-view" */)
);
const MoviesPageView = lazy(() =>
  import('views/MoviesPageView' /* webpackChunkName: "movies-view" */)
);
const MovieDetailsPageView = lazy(() =>
  import(
    'views/MovieDetailsPageView' /* webpackChunkName: "movie-detail-view" */
  )
);
const CastView = lazy(() =>
  import('views/CastView' /* webpackChunkName: "cast-view" */)
);
const ReviewsView = lazy(() =>
  import('views/ReviewsView' /* webpackChunkName: "reviews-view" */)
);
const NotFoundView = lazy(() =>
  import('views/NotFoundView' /* webpackChunkName: "not-found-view" */)
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePageView />} />
        <Route path="movies" element={<MoviesPageView />} />
        <Route path="movies/:movieId" element={<MovieDetailsPageView />}>
          <Route path="cast" element={<CastView />} />
          <Route path="reviews" element={<ReviewsView />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}
