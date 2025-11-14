import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import "./Header.css";
import logo from "../../assets/logo.png";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>

      <div className="header-right">
        <FiUser size={32} className="user-icon" />
        <button className="logout-btn" onClick={handleLogout}>LOGOUT</button>
      </div>
    </header>
  );
};

export default Header;
