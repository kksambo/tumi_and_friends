import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./components/RegistrationForm.tsx";
import DustbinInteraction from "./components/DustbinInteraction.tsx";
import Profile from "./pages/Profile.tsx";

import App from "./App.tsx";

ReactDOM.render(
  <BrowserRouter basename="/tumi_and_friends">
    <MainApp />
  </BrowserRouter>,
  document.getElementById("root")
);

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dustbininteraction" element={<DustbinInteraction />} />
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default MainApp;