import { useLocation } from "react-router-dom";
import { CiSearch, CiBellOn } from "react-icons/ci";

function Navbar() {
  const location = useLocation();

  // Determine the title based on the current path
  let title = "";
  switch (location.pathname.toLowerCase()) {
    case "/movies":
      title = "LATEST MOVIES";
      break;
    case "/series":
      title = "LATEST SERIES";
      break;
    case "/add":
      title = "ADD MOVIE/SERIES";
      break;
    case "/details":
      title = "";
  }

  return (
      <nav className="flex items-center justify-between p-8 w-full absolute top-0 left-0 text-white">
        <div className="flex space-x-11 text-lg">
           <a href="/">
            Enter-<span className="text-blue-500">Stream</span>
          </a>
          <a href="/">HOME</a>
          <a href="/Movies">MOVIES</a>
          <a href="/Series">SERIES</a>
        </div>
        <div className="flex items-center space-x-4 text-lg">
          <CiSearch />
          <CiBellOn />
        </div>
      </nav>
  );
}

export default Navbar;
