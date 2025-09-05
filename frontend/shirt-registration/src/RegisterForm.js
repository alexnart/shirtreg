import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    shirtSize: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", formData);
      setMessage("✅ Registration successful!");
      setFormData({ name: "", email: "", location: "", shirtSize: "" });
    } catch (error) {
      setMessage("❌ Error registering!");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>👕 Shirt Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <select
            name="shirtSize"
            value={formData.shirtSize}
            onChange={handleChange}
            required
          >
            <option value="">Select Shirt Size</option>
            <option value="S">Small (S)</option>
            <option value="M">Medium (M)</option>
            <option value="L">Large (L)</option>
            <option value="XL">Extra Large (XL)</option>
          </select>
          <button type="submit">Register</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterForm;
