import { Routes, Route, NavLink } from 'react-router-dom';
import { Cast } from '../Cast/Cast';
import { Home } from '../Home/Home';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { Movies } from '../Movies/Movies';
import { Reviews } from '../Reviews/Reviews';
import { NotFound } from '../NotFound/NotFound';
import { Header } from 'components/Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
