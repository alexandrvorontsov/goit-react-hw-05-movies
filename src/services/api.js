import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '42470a375c0d0a39747d44791e35db2f',
  },
});

export const fetchTrendingFilms = async () => {
  const response = await api.get('/trending/movie/week');
  return response.data.results;
};

export const fetchFilmDetails = async movie_id => {
  const response = await api.get(`/movie/${movie_id}`);
  return response.data;
};

export const fetcActors = async movie_id => {
  const response = await api.get(`/movie/${movie_id}/credits`);
  return response.data.cast;
};

export const fetchReviews = async movie_id => {
  const response = await api.get(`/movie/${movie_id}/reviews`);
  return response.data.results;
};

export const fetchFindFilms = async (query, page) => {
  const response = await api.get(`/search/movie`, {
    params: {
      query,
      page,
    },
  });
  return response.data;
};

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export function createImg(path) {
  if (path) {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : defaultImg;
  }
  return;
}
