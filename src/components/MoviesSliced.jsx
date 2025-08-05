import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MoviesSliced = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const retriveData = async () => {
      const respond = await fetch("http://localhost:4000/movies");
      const data = await respond.json();

      const arrayMovie = Array.isArray(data.movies) ? data.movies : data;
      const filterMovies = arrayMovie.filter((movie) => movie.type === "movie");

      setMovies(filterMovies.slice(0, 6));
      console.log("Fetched data", data);
    };
    retriveData();
  }, []);

  return (
    <div className="bg-black/70 w-full">
      <div className="text-white text-2xl font-bold">LATEST MOVIES</div>
      <div className="flex space-x-4">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/details/${movie.id}`} key={movie.id}>
              <div>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-48 h-72"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 transition rounded-full w-24 h-10 text-white">
          <a href="/movies">More</a>
        </button>
      </div>
    </div>
  );
};

export default MoviesSliced;
