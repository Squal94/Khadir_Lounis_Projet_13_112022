import React from "react";
// import { useEffect } from "react";
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import D404 from "./Pages/D404";
import "./Styles/index.scss";
import SignIn from "./Pages/SignIn";
import User from "./Pages/User";

/**
 * Component App
 * Component App Generates a router that redirects pages according to entries
 */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<D404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
