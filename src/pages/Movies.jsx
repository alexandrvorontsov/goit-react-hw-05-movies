import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchFindFilms } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState(query ?? '');
  const [findingFilms, setFindingFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getFindFilms() {
      const films = await fetchFindFilms(query);
      setFindingFilms(films.results);     
    }
    getFindFilms();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Please write what you need.');
      return;
    }

    setSearchParams({ query: searchQuery.trim().toLowerCase(), page: 1 });
  };

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={searchQuery} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {findingFilms.map(findingFilm => (
          <li key={findingFilm.id}>
            <Link to={`/movies/${findingFilm.id}`} state={{ from: location }}>
              {findingFilm.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
