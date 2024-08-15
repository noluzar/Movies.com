import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const retriveData = async () => {
            const respond = await fetch('http://localhost:4000/movies');
            const data = await respond.json();

            const arrayMovie = Array.isArray(data.movies) ? data.movies : data;
            const filterMovies = arrayMovie.filter(
                (movie) => movie.type === "movie"
            );


            setMovies(filterMovies.slice(0,8));
            console.log("Fetched data", data)


            //Series
            const arraySeries = Array.isArray(data.series) ? data.series : data;
            const filterSeries = arraySeries.filter(
                (movie) => movie.type === "series"
            );


            setSeries(filterSeries.slice(0,8));
            console.log("Fetched data", data)
        }
        retriveData();

    }, [])
    return (
        <div>
            <div>
                <div className="text-center p-10 text-2xl font-bold">LATEST MOVIES</div>
                <div className='flex justify-center p-4'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 sm:gap-14">
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <Link to={`/details/${movie.id}`} key={movie.id}>
                                <div>
                                    <img src={movie.image} alt={movie.title} className="w-48 h-72" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                </div>

                <div className="flex justify-center p-4">
                    <button className="bg-indigo-600 hover:bg-indigo-700 transition rounded-full w-24 h-10 text-white"><a href="/movies">More</a></button>
                </div>
            </div>
            <div className="text-center  text-2xl font-bold p-4">LATEST SERIES</div>
            <div className='flex justify-center p-11'>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:grid-cols-2 sm:gap-14">
                {series.map((series) => (
                    <div key={series.id} className="flex flex-col items-center">
                        <Link to={`/details/${series.id}`} key={series.id}>
                            <div>
                                <img src={series.image} alt={series.title} className="w-48 h-72" />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
            <div className="flex justify-center p-4 gap-8">
                <button className="bg-indigo-600 hover:bg-indigo-700 transition rounded-full w-24 h-10 text-white"><a href="/series">More</a></button>
            </div>
        </div>
    );
}

export default Home
