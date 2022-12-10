import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/index.scss";
import store from "./app/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider is an imported component of react-redux it allows to connect the store to the whole application and manage the states
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
