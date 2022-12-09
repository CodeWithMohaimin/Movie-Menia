import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import searchIco from "./search.svg";
const API_URL = " http://www.omdbapi.com?apikey=464eaa46";

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie min</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value="superman"
          onChange={() => {}}
        />
        <img src={searchIco} alt="Search" onClick={() => {}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
