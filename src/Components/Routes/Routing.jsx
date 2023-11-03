import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import About from "../About/About"

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
