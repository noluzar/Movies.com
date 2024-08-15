import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Series() {

  const [series, setSeries] = useState([]);

  useEffect(() =>{
    const retriveData = async () => {
      const respond = await fetch('http://localhost:4000/movies');
      const data = await respond.json();

      const arraySeries = Array.isArray(data.series)? data.series: data;
      const filterSeries = arraySeries.filter(
        (movie) => movie.type === "series"
      );

      setSeries(filterSeries);
      console.log("Fetched data", data)
    }
   retriveData();

  }, [])
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
      {series.map((series) =>(
        <Link to={`/details/${series.id}`} key={series.id}>
          <img src={series.image} alt={series.title} className="w-48 h-72"/>
          </Link>
      ))}
      
      </div>
      {/* {series.map((row, index) => (
        <div key={index} className="flex justify-center gap-8 mb-4">
          {row.map((src, idx) => (
            <img key={idx}  className="h-72 w-48 object-cover" />
          ))}
        </div>
      ))}  */}
    </div>
  );
}

export default Series;
