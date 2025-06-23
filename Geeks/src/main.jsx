import React from "react";
import ReactDom from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"

createRoot(document.getElementById("root")).render(
    <>
    <App/>
    </>
)