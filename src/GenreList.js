import React, { Component } from "react";
import GenreCard from "./GenreCard";
import "./GenreList.css";

const theGenre = {
  genre: "trance",
  description: "trance trance trance trance",
};

class GenreList extends Component {
  state = {
    genre: theGenre,
  };

  render() {
    return (
      <div className="genre-list">
        <GenreCard genre={this.state.genre} />
      </div>
    );
  }
}

export default GenreList;
