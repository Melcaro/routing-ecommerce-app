import React from 'react';
import { Link } from 'react-router-dom';
import zalandoLogo from './zalandoLogo.png';

import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <ul className="menuList">
        <li className="menuItem">FEMME</li>
        <li className="menuItem">HOMME</li>
        <li className="menuItem">ENFANT</li>
      </ul>
      <div className="logoContainer">
        <Link to={'/'} className="linkToHomePage">
          <img alt="brandLogo" src={zalandoLogo} />
        </Link>
      </div>
    </div>
  );
};
