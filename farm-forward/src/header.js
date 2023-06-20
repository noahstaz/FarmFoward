import React from 'react';
import './header.css'
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
          <li><a href="/grants">Grants</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/equipment">Equipment</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <span className="username">Hello, User</span>
      </div>
    </header>
  );
};

export default Header;