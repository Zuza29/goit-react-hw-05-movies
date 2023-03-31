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
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
