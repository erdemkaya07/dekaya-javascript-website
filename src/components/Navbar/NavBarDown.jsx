import React, { useState } from 'react';
import DekayaLogo from '../../assets/images/dekaya-logo.png';
import { Link, NavLink } from 'react-router-dom';
import DeKayaLinks from '../DeKayaLinks';

function NavBarDown({ isFixed }) {

  const [isOpen, setIsOpen] = useState(false); 
  const mobileMenu = () => {
    setIsOpen((isOpen) => !isOpen)
  }


  return (
    <div
      className="navbar-down"
      style={
        isFixed
          ? { position: 'fixed', top: 0, width: '100%', zIndex: 1000, paddingBlock: '1rem' }
          : { position: 'static', paddingBlock: '1.8rem' }
      }
    >
      <div className="container">
        <div className="navbar-down-logo">
          <Link to="/">
            <img
              className="main-nav-logo"
              src={DekayaLogo}
              alt="De-Kaya logo"
            />
          </Link>
        </div>
        <div className="navbar-down-links">
          <ul id="main-menu" className={`main-menu ${isOpen ? "is-open" : ""}`} aria-label="main menu">
            <DeKayaLinks />
          </ul>
          <button className="menu-btn" aria-label="menu button for mobile" onClick={mobileMenu}>
            <i className="fa-solid fa-bars menu-btn-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBarDown;
