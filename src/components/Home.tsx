import React from "react";

function Home() {
  return (
    <div className="container-fluid">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          My Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row mt-4">
        {/* Sidebar */}
        <div className="col-md-3 bg-light p-3">
          <h5 className="text-secondary">Menu</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="list-group-item">
              <a href="#">Analytics</a>
            </li>
            <li className="list-group-item">
              <a href="#">Reports</a>
            </li>
            <li className="list-group-item">
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5>Dashboard Overview</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Welcome to your dashboard! Here you can view analytics, reports,
                and manage your settings.
              </p>
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Analytics</h5>
                      <p className="card-text">View your analytics data here.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white bg-warning mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Reports</h5>
                      <p className="card-text">Generate and view reports.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white bg-danger mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Settings</h5>
                      <p className="card-text">Manage your account settings.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;