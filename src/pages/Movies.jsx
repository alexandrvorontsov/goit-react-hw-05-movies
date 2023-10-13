import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchFindFilms } from 'services/api';

const Movies = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
