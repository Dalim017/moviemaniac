import React from "react";

import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/star.png";
import Party from "./assets/partying-face.png";
import Navbar from "./Components/Navbar/Navbar";
import MovieList from "./Components/MovieList/MovieList";
const App = () => {
  return (
    <div className="app">
      <Navbar />

      <MovieList type="popular" title="Popular" emoji={Fire} />

      <MovieList type="top_rated" title="Top Rated" emoji={Star} />

      <MovieList type="upcoming" title="Upcoming" emoji={Party} />
    </div>
  );
};

export default App;
