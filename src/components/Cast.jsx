import { fetcActors, createImg } from '../services/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState();

  useEffect(() => {
    async function getCast() {
      const actorsData = await fetcActors(movieId);
      setActors(actorsData);
    }
    getCast();
  }, [movieId]);

  return (
    <ul>
      {actors?.map(actor => (
        <li key={actor.id}>
          <img
            src={createImg(actor.profile_path)}
            alt="actor"
            width="200px"
            height="300px"
          />
          <p>Name: {actor.original_name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
