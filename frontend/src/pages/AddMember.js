import React, { useState, useEffect } from "react";
import axios from "axios";
import BackHomeButton from "../components/BackHomeButton";

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    email: "",
    role: "",
    image: null,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await axios.post("http://localhost:5000/api/members", data);
      alert("Member added!");
      setFormData({
        name: "",
        rollNo: "",
        department: "",
        email: "",
        role: "",
        image: null,
      });
    } catch (error) {
      console.error(error);
      alert("Error adding member");
    }
  };

  // Styles
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    fontFamily: "Segoe UI, sans-serif",
  };

  const formCardStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "500px",
    opacity: animate ? 1 : 0,
    transform: animate ? "scale(1)" : "scale(0.95)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#333",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  const submitButtonStyle = {
    marginTop: "15px",
    width: "100%",
    padding: "12px",
    fontSize: "1rem",
    backgroundColor: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <div style={formCardStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>
          Add New Rival To Team
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div style={formGroupStyle}>
            <label style={labelStyle}>Name:</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Roll Number:</label>
            <input
              type="text"
              name="rollNo"
              required
              value={formData.rollNo}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Department:</label>
            <input
              type="text"
              name="department"
              required
              value={formData.department}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Email:</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Role:</label>
            <input
              type="text"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Photo:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={submitButtonStyle}>
            Submit
          </button>
        </form>
        <div style={{ marginTop: "20px" }}>
          <BackHomeButton />
        </div>
      </div>
    </div>
  );
};

export default AddMember;
