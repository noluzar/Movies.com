import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const retrieveData = async () => {
            const response = await fetch('http://localhost:4000/movies');
            const data = await response.json();

            const arrayMovie = Array.isArray(data.movies) ? data.movies : data;
            const filterMovies = arrayMovie.filter(
                (movie) => movie.type === "movie"
            );

            setMovies(filterMovies);
            console.log("Fetched data", data);
        };

        retrieveData();
    }, []);

    return (
        <div className="p-4">
            <div className="flex justify-end mb-4">
                <Link to="/Add">
                    <button className="bg-indigo-500 hover:bg-indigo-700 transition rounded-full w-24 h-10 text-white">
                        ADD
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:grid-cols-2 sm:gap-14">
                {movies.map((movie) => (
                    <Link to={`/details/${movie.id}`} key={movie.id}>
                        <div>
                            <img src={movie.image} alt={movie.title} className="w-48 h-72"/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Movies;
