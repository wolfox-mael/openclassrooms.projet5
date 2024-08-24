import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Home from "./pages/Home/";
import About from "./pages/About";
import Location from "./pages/Location";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  div {
    font-family: Montserrat;
  }
  
  body {
  margin: 0;
  }

  main {
  width: 100%;
  max-width: 1440px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    ></link>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
