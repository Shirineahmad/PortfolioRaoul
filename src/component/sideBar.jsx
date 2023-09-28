import React from 'react'
import "./sideBar.css"
import { Link } from "react-router-dom";
const sideBar = () => {
  return (
    <div className="sideBar">
      <div className="skills">
        <Link to="/skills">Skills</Link>
      </div>
      <div className="projects">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="myInfo">
        <Link to="/contactInfo">Contact Info</Link>
      </div>
      

    </div>
  );
}

export default sideBar