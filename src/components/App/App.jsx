import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'index.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Home = lazy(() => import('../Home/Home'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../Movies/Movies'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Header = lazy(() => import('../Header/Header'));

export const App = () => {
  return (
    <div className="wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
