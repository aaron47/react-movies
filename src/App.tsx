import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";
//38896449

const API_URL: string = "http://www.omdbapi.com?apikey=38896449";

const App: React.FC = () => {
  const [movies, setMovies] = useState<any>([]);
  const [search, setSearch] = useState<string>("");

  const searchMovies = async (title: string) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };
  // useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          type="text"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(search);
          }}
        />
      </div>
      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie: any, index: number) => {
            return <MovieCard key={index} movie={movie} />;
          })
        ) : (
          <div>
            <h2 className="empty">No Movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
