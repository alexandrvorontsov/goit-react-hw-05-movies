import React, { useState, useEffect } from 'react';
// import { Suspense } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchFindFilms } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;
  const query = searchParams.get('query') ?? '';

  const [searchWord, setSearchWord] = useState(query ?? '');
  const [findingFilms, setFindingFilms] = useState([]);
  const [filmsData, setFilmsData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getFindFilms() {
      const films = await fetchFindFilms(query, page);

      setFindingFilms(films.results);
      setFilmsData(films);
    }
    getFindFilms();
  }, [query, page]);

  const handleSubmit = event => {
    event.preventDefault();

    if (searchWord.trim() === '') {
      alert('Please write what you need.');
      return;
    }

    setSearchParams({ query: searchWord.trim().toLowerCase(), page: 1 });
  };

  const handleChange = event => {
    setSearchWord(event.currentTarget.value);
  };

  const handleChangePage = newPage => {
    setSearchParams({ query: searchWord.trim().toLowerCase(), page: newPage });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={searchWord} />
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

      {filmsData?.total_pages && (
        <div>
          <ul>
            {[...Array(filmsData?.total_pages)].map((_, index) => (
              <li key={index}>
                <button
                  disabled={index + 1 === filmsData?.page}
                  onClick={() => handleChangePage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
