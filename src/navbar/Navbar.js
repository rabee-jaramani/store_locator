import React from 'react';
import logo from './birkenstock_logo.jpg';
export default function Navbar() {
  return (
    <div className="navbar-container container-g">
      <div className="logo-container">
        <img src={logo} alt="Berkinstock" />
      </div>

      <div className="apparel-link-container flex-centering">
        <a href="https://www.appareluae.com/" target="_blank" rel="noreferrer">
          appareluae.com
        </a>
      </div>
    </div>
  );
}
