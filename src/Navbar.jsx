import header from "./assets/pictures/header.png";
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Determine the title based on the current path
  let title = '';
  switch (location.pathname.toLowerCase()) {
    case '/movies':
      title = 'LATEST MOVIES';
      break;
    case '/series':
      title = 'LATEST SERIES';
      break;
    case '/add':
      title = 'ADD MOVIE/SERIES';
      break;
    case '/details':
      title = "";
  }

  return (
    <div style={{ backgroundImage: `url(${header})` }} className="bg-no-repeat bg-cover bg-center h-72 text-white">
      <nav className="container flex items-center justify-between p-8">
        <h3 className="text-indigo-700 text-xl">
          <a href="/">Enter-<span className="text-white">Stream</span></a>
        </h3>
        <ul className="flex space-x-11 text-lg">
          <li><a href="/Movies">MOVIES</a></li>
          <li><a href="/Series">SERIES</a></li>
        </ul>
        <button className="bg-indigo-600 h-8 w-36 rounded-full">SUBSCRIBE</button>
      </nav>
      <div className="text-center text-3xl font-bold py-8">
        {title}
      </div>
    </div>
  );
}

export default Navbar;
