import React from 'react';
import './App.css'
import Photo from './images/logo192.png';

const Header = ({loggedInUser }) => {
  return (
    <header>
      <div className="header-left">
        <img src={Photo} alt="Company Logo" />
        <span className="company-name">Farm Forwarding</span>
      </div>
      <nav className="header-middle">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <span className="username">{loggedInUser}</span>
      </div>
    </header>
  );
};

export default Header;