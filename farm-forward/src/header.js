import React from 'react';
import './header.css'
import Photo from './images/logo.svg';
import {
    faUser,
} from "@fortawesome/free-brands-svg-icons";

const Header = ({loggedInUser }) => {
  return (
    <header className='header'>
      <div className="header-left">
        <img src={Photo} alt="Company Logo" />
        {/* <span className="company-name">Farm Forward</span> */}
      </div>
      <nav className="header-middle">
        <ul>
            <li className='mx-3'><a href="/home">Home</a></li>
          <li className='mx-3'><a href="/finance">Funding</a></li>
          <li className='mx-3'><a href="/tutorials">Learning</a></li>
          <li className='mx-3'><a href="/equipment">Equipment & Land</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <span className="username">Hello John </span><a href='/'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></a>
      </div>
    </header>
  );
};

export default Header;