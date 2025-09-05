import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import AdminPanel from "./AdminPanel";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">👕 ShirtReg</div>
        <ul className="nav-links">
          <li><Link to="/">Register</Link></li>
          <li><Link to="/admin">Admin Panel</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
