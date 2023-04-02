import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './header.css';
const Header: React.FunctionComponent = () => {
  const { pathname } = useLocation();

  const isHomePath = pathname === '/';
  const isAboutPath = pathname === '/about';
  const isAddCardPath = pathname === '/create';

  return (
    <div className="header">
      <Link className={isHomePath ? 'active' : ''} to="/">
        HOME
      </Link>
      <Link className={isAddCardPath ? 'active' : ''} to="/create">
        Add card
      </Link>
      <Link className={isAboutPath ? 'active' : ''} to="/about">
        ABOUT US
      </Link>
    </div>
  );
};

export default Header;
