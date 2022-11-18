import React from "react";
// import { useEffect } from "react";
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import D404 from "./Pages/D404";
import "./Styles/index.scss";

// import { useDispatch, useSelector } from "react-redux";

const App = () => {
  // const getData = () => {
  //   axios.get("http://localhost:3001").then((res) => console.log(res.data));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user/:id/:extens" element={<Profile />} /> */}
        <Route path="*" element={<D404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// dispatch(setPicturesData(res.data))
