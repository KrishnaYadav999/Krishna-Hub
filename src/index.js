import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import "./index.css";
import Singin from "./components/Singin";
import Login from "./components/Login";




<>
  <Login />
  <Singin />
  <AboutPage />
</>



ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/singin" element={<Singin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
