import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to the Trash Management System</h1>
        <p className="lead">
          Manage waste efficiently with smart dustbins and IoT technology.
        </p>
      </div>
      <div className="home-features">
        <h2>Features</h2>
        <ul>
          <li>User Registration</li>
          <li>Smart Dustbin Interaction</li>
          <li>Data Transmission using IoT Technology</li>
          <li>Rewards for Waste Disposal</li>
        </ul>
      </div>
      <div className="home-actions">
        <h2>Get Started</h2>
        <Link to="/register" className="btn btn-primary">
          Register
        </Link>
        <Link to="/login" className="btn btn-secondary ml-2">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;