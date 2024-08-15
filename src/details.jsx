import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        const retrieveData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/movies/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                setError(error.message);
            }
        };

        retrieveData();
    }, [id]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:4000/movies/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete the movie');
            }
            navigate('/'); // Redirect to the home page after deletion
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {movie ? (
                <div className="flex flex-col sm:flex-row justify-center p-4">
                    <img src={movie.image} alt={movie.title} className="h-auto w-80 p-8 m-7"/>
                    <div className="ml-4 p-20">
                        <h1 className="text-2xl">{movie.title}</h1>
                        <p className="w-64">{movie.description}</p>
                        <p className="">Country: {movie.country}</p>
                        <p>Year: {movie.year}</p>
                        <p>Type: {movie.type}</p>
                        <div className="mt-4">
                            <button className="bg-indigo-500 rounded-full w-32 text-white mr-2">Edit</button>
                            <button
                                className="bg-indigo-500 rounded-full w-32 text-white"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Details;
