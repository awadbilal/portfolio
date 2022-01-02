import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "./App.css";
import HomePage from "./Containers/HomePage";
import NavBar from "./Components/NavBar/Navbar";
import Footer from './Components/Footer/Footer';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
