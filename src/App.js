import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import HomePage from "./Containers/HomePage";
import WorksPage from "./Containers/WorksPage";
import Footer from './Components/Footer/Footer';
import Data from './Components/Work/workList';
import SinglePage from "./Components/Work/SinglePage";

const App = () => {

  useEffect(() => {
    Aos.init({
      startEvent: 'DOMContentLoaded', 
      duration: 3000,
      once: true
    });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/portfolio/" element={<HomePage />} />
        <Route path="/portfolio/works" element={<WorksPage />} />
        {
          Data.map((item) => {
            return (
              <Route path={`/portfolio/${item.title.replace(/\s/g, '').toLowerCase()}`} element={<SinglePage info={item} />} />
            )
          })
        }
      </Routes>
      <Footer />
    </>
  );
};

export default App;
