import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const AdminPanel = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://shirt-registration-backend.onrender.com/api/registrations");
      setRegistrations(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h2>📋 Admin Panel - Registered Users</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Shirt Size</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg._id}>
                <td>{reg.name}</td>
                <td>{reg.email}</td>
                <td>{reg.location}</td>
                <td>{reg.shirtSize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
