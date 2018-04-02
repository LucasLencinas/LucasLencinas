import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="item">
      <Link to="/">lucaslencinas</Link>
    </div>
    <div className="item">
      <Link to="/about">About me</Link>
    </div>
    <div className="item">
      <Link to="/skills">Skills</Link>
    </div>
    <div className="item">
      <Link to="/projects">Projects</Link>
    </div>
    <div className="item">
      <Link to="/talks">Talks</Link>
    </div>
    <div className="item">
      <Link to="/articles">Articles</Link>
    </div>
  </div>
);

export default Navbar;
