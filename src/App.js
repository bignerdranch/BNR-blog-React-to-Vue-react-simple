import React, { Component } from "react";
import GenreList from "./GenreList";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div id="app">
        <h1>Genres</h1>
        <GenreList />
      </div>
    );
  }
}

export default App;
