import React, { Component } from "react";
import GenreCard from "./GenreCard";
import "./GenreList.css";
import genreService from "../services/genreService";

class GenreList extends Component {
  state = {
    genres: [],
  };

  componentDidMount() {
    genreService
      .getGenres()
      .then((res) => this.setState({ genres: res.data }))
      .catch((error) => console.log("There was an error", error));
  }

  render() {
    return (
      <div className="genre-list">
        {this.state.genres.map((genre) => (
          <GenreCard genre={genre} key={genre.id} />
        ))}
      </div>
    );
  }
}

export default GenreList;
