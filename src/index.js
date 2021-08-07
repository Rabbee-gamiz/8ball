import ReactDOM from 'react-dom';
import './App.css';
import React from 'react';
import App from "./App"
import { StrictMode } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"




const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);






