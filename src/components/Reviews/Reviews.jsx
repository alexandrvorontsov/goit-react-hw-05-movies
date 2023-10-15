import { fetchReviews } from '../../services/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    async function getReviews() {
      const reviewsData = await fetchReviews(movieId);
      setReviews(reviewsData);
    }
    getReviews();
  }, [movieId]);

  if (reviews?.length === 0) {
    return 'We do not have any reviews for this movie.';
  }
  return (
    <ul>
      {reviews?.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
