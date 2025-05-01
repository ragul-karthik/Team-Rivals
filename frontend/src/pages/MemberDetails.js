import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackHomeButton from "../components/BackHomeButton";

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/members/${id}`)
      .then((res) => setMember(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!member) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  // Styles
  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    width: "400px",
    padding: "25px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "20px",
  };

  const infoText = {
    margin: "10px 0",
    fontSize: "1rem",
    color: "#333",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2>{member.name}</h2>
        <img
          src={`http://localhost:5000/uploads/${member.image}`}
          alt={member.name}
          style={imageStyle}
        />
        <p style={infoText}><strong>Roll Number:</strong> {member.rollNo}</p>
        <p style={infoText}><strong>Department:</strong> {member.department}</p>
        <p style={infoText}><strong>Email:</strong> {member.email}</p>
        <p style={infoText}><strong>Role:</strong> {member.role}</p>
        <p style={{ ...infoText, fontSize: "0.85rem", color: "#888" }}>
          <strong>Member ID:</strong> {member._id}
        </p>
        <div style={{ marginTop: "20px" }}>
          <BackHomeButton />
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
