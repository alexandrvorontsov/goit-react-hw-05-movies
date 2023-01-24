import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../service/api';
import Box from '../Box';
import { Ul, Item, Title, Text } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(data => setCast(data));
  }, [movieId]);

  return (
    <Box>
      <Ul>
        {cast.map(({ name, id, character, profile }) => (
          <Item key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile}`}
              alt={name}
              width={200}
            />
            <Title>{name}</Title>
            <Text>Character: {character}</Text>
          </Item>
        ))}
      </Ul>
    </Box>
  );
};
export default Cast;
