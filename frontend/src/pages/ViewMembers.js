import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BackHomeButton from '../components/BackHomeButton';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/members")
      .then((res) => setMembers(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Styles
  const pageStyle = {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "linear-gradient(to right, #ffecd2, #fcb69f)",
    fontFamily: "Segoe UI, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "220px",
    padding: "15px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: "scale(1.05)",
    boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "8px 14px",
    fontSize: "0.9rem",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#fcb69f",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <h2 style={titleStyle}>Our Team Members</h2>
      <div style={gridStyle}>
        {members.map((member) => (
          <div
            key={member._id}
            style={cardStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              alt={member.name}
              style={imageStyle}
            />
            <h3 style={{ color: "#333" }}>{member.name}</h3>
            <p style={{ color: "#555", fontStyle: "italic" }}>{member.role}</p>
            <Link to={`/members/${member._id}`}>
              <button style={buttonStyle}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <BackHomeButton />
      </div>
    </div>
  );
};

export default ViewMembers;
