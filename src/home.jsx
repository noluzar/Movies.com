import React, { useEffect, useState } from "react";
import MoviesSliced from "./components/MoviesSliced";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const retriveData = async () => {
      const respond = await fetch("http://localhost:4000/movies");
      const data = await respond.json();

      const arrayMovie = Array.isArray(data.movies) ? data.movies : data;
      const filterMovies = arrayMovie.filter((movie) => movie.type === "movie");

      setMovies(filterMovies.slice(0, 8));
      console.log("Fetched data", data);
    };
    retriveData();
  }, []);

  return (
      <div className="w-full">
        {movies.slice(5, 6).map((movie) => (
          <div key={movie.id} className="w-full">
            <img src={movie.image} alt={movie.title} className="w-full h-[100vh" />
          </div>
        ))}
      </div>
  );
};

export default Home;
