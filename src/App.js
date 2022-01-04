import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import NavBar from "./Components/NavBar/Navbar";
import HomePage from "./Containers/HomePage";
import WorksPage from "./Containers/WorksPage";
import Education from './Containers/Education';
import Contact from './Containers/Contact';
import Footer from "./Components/Footer/Footer";
import WorkData from "./Components/Work/workList";
import WorkSinglePage from "./Components/Work/SinglePage";
import EducationData from "./Components/Education/educationList";
import EducationSinglePage from "./Components/Education/EducationSinglePage";
import "./App.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      startEvent: "DOMContentLoaded",
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        {WorkData.map((item) => {
          return (
            <Route
              path={`/${item.title.replace(/\s/g, "").toLowerCase()}`}
              element={<WorkSinglePage info={item} />}
            />
          );
        })}
        {EducationData.map((item) => {
          return (
            <Route
              path={`/${item.title.replace(/\s/g, "").toLowerCase()}`}
              element={<EducationSinglePage info={item} />}
            />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
