import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./Views/App"
// import GetData from "./GetData";
import reportWebVitals from './reportWebVitals';
// import FrontC from "./frontC"

// import { createBrowserHistory } from "history";

// const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

