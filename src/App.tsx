import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from react-dom/client
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./components/RegistrationForm.tsx";
import DustbinInteraction from "./components/DustbinInteraction.tsx";
import Profile from "./pages/Profile.tsx";
import AdminConsole from "./components/AdminConsole.tsx";


function MainApp() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dustbininteraction" element={<DustbinInteraction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminConsole />} />
      </Routes>
    </BrowserRouter>
  );
}

// Use ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<MainApp />);

export default MainApp;