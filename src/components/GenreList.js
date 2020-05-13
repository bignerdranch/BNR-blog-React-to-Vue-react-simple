import React, { useState, useEffect } from "react";
import GenreCard from "./GenreCard";
import "./GenreList.css";
import genreService from "../services/genreService";

const GenreList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    genreService
      .getGenres()
      .then((response) => {
        setGenres(response.data);
      })
      .catch((error) => console.log("There was an error", error));
  }, []);

  return (
    <div className="genre-list">
      {genres.map((genre) => (
        <GenreCard genre={genre} key={genre.id} />
      ))}
    </div>
  );
};

export default GenreList;
