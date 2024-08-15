import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar.jsx"
import Home from "./home.jsx"
import Movies from "./Movies.jsx"
import Series from "./Series.jsx" 
import BottomNav from "./bottomnav.jsx"
import Add from "./Add.jsx"
import Details from './details.jsx'

function App () {
//Add new Movie or series
const createNew = async (newMovies) =>{
 await fetch('http://localhost:4000/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovies),
      });
      return;
}


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/add" element={<Add  submitMovies={createNew}/>} /> 
      </Routes>
      <BottomNav />
    </Router>
    </>

  );
}

export default App