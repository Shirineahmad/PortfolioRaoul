import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import Logo from "./logo.jpeg";
import './header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="part1">
        <Link to="/">
          <img src={Logo} alt="missing logo" className="logo" />
        </Link>
      </div>
      <ul className="part2">
        <li>
          <Link to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to="/Register">
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
