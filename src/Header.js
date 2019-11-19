import React from 'react';
import { Link } from 'react-router-dom';
import zalandoLogo from './zalandoLogo.png';

import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <ul className="menuList">
        <Link className="linkToCategory " to={`/femme`}>
          <li className="menuItem">FEMME</li>
        </Link>
        <Link to={'/homme'}>
          <li className="menuItem">HOMME</li>
        </Link>
        <Link to={'/enfant'}>
          <li className="menuItem">ENFANT</li>
        </Link>
      </ul>
      <div className="logoContainer">
        <Link to={'/'} className="linkToHomePage">
          <img alt="brandLogo" src={zalandoLogo} />
        </Link>
      </div>
    </div>
  );
};
