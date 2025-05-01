import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
    background: "linear-gradient(135deg, #74ebd5, #ACB6E5)", // Gradient background
    fontFamily: "Segoe UI, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#ffffffdd",
    padding: "40px 60px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "30px",
  };

  const buttonStyle = {
    margin: "0 10px",
    padding: "12px 24px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#3498db",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const viewButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#2ecc71",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>TEAM RIVALS</h1>
        <p style={paragraphStyle}>Welcome to team Rivals Management</p>

        <div>
          <Link to="/add-member">
            <button style={buttonStyle}>Add Member</button>
          </Link>
          <Link to="/view-members">
            <button style={viewButtonStyle}>View Members</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
