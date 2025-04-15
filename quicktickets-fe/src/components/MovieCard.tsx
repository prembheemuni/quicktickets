import React from "react";
import "./Card.css";

interface MovieCardProps {
  movie: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Duration: {movie.duration} min</p>
    </div>
  );
};

export default MovieCard;
