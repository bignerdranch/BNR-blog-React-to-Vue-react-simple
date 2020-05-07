import React from "react";
import "./GenreCard.css";

const GenreCard = ({ genre }) => {
  return (
    <div className="genre-card">
      <h4>{genre.genre}</h4>
      <p>{genre.description}</p>
    </div>
  );
};

export default GenreCard;
