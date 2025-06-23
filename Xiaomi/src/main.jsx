import React from "react";
import ReactDom from "react-dom/client"
import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import App from "./App.jsx";
import "./Styles/index.css";



createRoot(document.querySelector("#root")).render(<Fragment><App/></Fragment>);