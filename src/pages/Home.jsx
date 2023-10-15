import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrendingFilms, createImg } from 'services/api';

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    async function getTrendingFilms() {
      const films = await fetchTrendingFilms();
      setTrendingFilms(films);
    }
    getTrendingFilms();
  }, []);

  return (
    <main>
      <h2>Trending movies of the week</h2>
      <ul>
        {trendingFilms.map(film => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
            </li>
          );
        })}
      </ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default HomePage;
