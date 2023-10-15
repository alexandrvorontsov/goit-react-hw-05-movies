import { useParams, useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { BackLink } from '../components/BackLink/BackLink';
import { useState, useEffect, useRef } from 'react';
import { Suspense } from 'react';
import { fetchFilmDetails } from 'services/api';
import { createImg } from 'services/api';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  // /dogs/:dogId
  // http://lcalhost:3000/dogs/dogs-3
  // import { useParams } from 'react-router-dom';
  // const DogDetails = ()=> {
  //   const {dogId} = useParams();
  // useEffect(()=>{HTTP запрос на сервер записиваем в стейт и рендерим},[])

  //   console.log(params);
  //   return <>DogDetails: {dogId}</>
  // }

  useEffect(() => {
    async function getDetails() {
      const details = await fetchFilmDetails(movieId);
      setFilm(details);
    }
    getDetails();
  }, [movieId]);

  const { poster_path, release_date, vote_average, overview, genres } = film;

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      <img src={createImg(poster_path)} alt="Film avatar" width="200px" />
      <h2>
        {film.title} ({release_date?.slice(0, 4)})
      </h2>
      <p>User score: {Math.round(vote_average * 10)} %</p>
      <h3>Overwiev</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>
        {genres?.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </p>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link
              state={backLinkLocationRef.current}
              to={`/movies/${movieId}/cast`}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              state={backLinkLocationRef.current}
              to={`/movies/${movieId}/reviews`}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
