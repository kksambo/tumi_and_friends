import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Import the CSS file for styling

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      setError(null);

      const userEmail = localStorage.getItem("userEmail"); // Retrieve the logged-in user's email
      if (!userEmail) {
        setError("User not logged in. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("https://ledwaba-and-friends.onrender.com/api/AppUsers");
        if (!response.ok) {
          throw new Error("Failed to fetch user details.");
        }

        const users = await response.json();
        const loggedInUser = users.find((u: any) => u.email === userEmail);

        if (!loggedInUser) {
          throw new Error("User not found.");
        }

        setUser(loggedInUser);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>
      {user && (
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          <p><strong>Points:</strong> {user.points}</p>
        </div>
      )}
      <button
        className="btn btn-primary"
        onClick={() => navigate("/dustbininteraction")}
      >
        Go to Dustbin Interaction
      </button>
    </div>
  );
};

export default Profile;