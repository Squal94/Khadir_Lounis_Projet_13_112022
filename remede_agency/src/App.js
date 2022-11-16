import React from "react";
import { useEffect } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const getData = () => {
    axios.get("http://localhost:3001").then((res) => console.log(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Je suis la</h1>
    </div>
  );
};

export default App;

// dispatch(setPicturesData(res.data))
