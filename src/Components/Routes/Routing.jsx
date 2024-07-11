import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Home from "../Home/Home";
import About from "../About/About";
import Portfoliopage from "../Portfoliopage/Portfoliopage";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/portfoliopage" element={<Portfoliopage />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
