import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./home.jsx";
import Movies from "./pages/Movies.jsx";
import Series from "./pages/Series.jsx";
import BottomNav from "./components/bottomnav.jsx";
import Add from "./pages/Add.jsx";
import Details from "./pages/details.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
  //Add new Movie or series
  const createNew = async (newMovies) => {
    await fetch("http://localhost:4000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovies),
    });
    return;
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/add" element={<Add submitMovies={createNew} />} />
        </Routes>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
