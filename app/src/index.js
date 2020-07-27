import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import QM from './component/questionmark.jsx'
import * as serviceWorker from "./serviceWorker";
import Todo from "./todoApp/index.jsx";
import App from "./component/questionmark";
import Button from "./buttonthing/button";

ReactDOM.render(
  <React.StrictMode>
    <Button />
    < Button / >
    <Todo />
    
    {/* <QM /> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
