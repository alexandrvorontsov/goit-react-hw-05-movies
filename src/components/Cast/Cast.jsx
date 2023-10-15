import { fetcActors, createImg } from '../../services/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, ProductName } from './Cast.styled';

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
    <Container>
      {actors?.map(actor => (
        <Card key={actor.id}>
          <img
            src={createImg(actor.profile_path)}
            alt="actor"
            width="200px"
            height="300px"
          />
          <ProductName>Name: {actor.original_name}</ProductName>
          <ProductName>Character: {actor.character}</ProductName>
        </Card>
      ))}
    </Container>
  );
};

export default Cast;
