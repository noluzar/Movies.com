import React from "react";
import Navbar from "../components/Navbar";
import Home from "../home";
import MoviesSliced from "../components/MoviesSliced";

const MainLayout = () => {
  return (
    <div className="w-[70%]">
      <Navbar />
      <Home />
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full">
        <MoviesSliced />
      </div>
    </div>
  );
};

export default MainLayout;
