import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import HomePage from "./Containers/HomePage";
import WorksPage from "./Containers/WorksPage";
import Footer from './Components/Footer/Footer';

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
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/works" element={<WorksPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
