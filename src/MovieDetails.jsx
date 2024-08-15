// import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from './movies.json';

function MovieDetails() {
  const { movieId } = useParams();
  const movie = moviesData.find(m => m.id === movieId);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="p-8">
      <img src={(`${movie.image}`).default} alt={movie.title} className="h-96 w-64 object-cover mb-4" />
      <h1 className="text-4xl mb-4">{movie.title}</h1>
      <p className="text-lg mb-4">{movie.description}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Country:</strong> {movie.country}</p>
    </div>
  );
}

export default MovieDetails;
