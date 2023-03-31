import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, WithRouterProps } from '../../HOC';

import './header.css';
const Header: React.FunctionComponent<WithRouterProps> = (props) => {
  const {
    location: { pathname },
  } = props;

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

export default withRouter(Header);
