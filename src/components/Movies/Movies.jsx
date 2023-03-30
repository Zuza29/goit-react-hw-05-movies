import { useEffect, useState } from 'react';

export const Movies = () => {
  const [value, setValue] = useState('');

  const fetchMovies = () =>
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=16b877ef666ac997a00ad8a16d1abc88&query=${value}`
    ).then(resp => resp.json()).catch(error => console.log(error))

  const handleSubmit = async event => {
    event.preventDefault();
      const movieList = await fetchMovies();
      console.log(movieList);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">
        <input id="searchInput" type="text" onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
