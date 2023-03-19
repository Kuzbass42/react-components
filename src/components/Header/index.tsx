import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, WithRouterProps } from '../../HOC';

import './header.css';
class Header extends React.Component<WithRouterProps> {
  render() {
    const {
      location: { pathname },
    } = this.props;

    const isHomePath = pathname === '/';
    const isAboutPath = pathname === '/about';

    return (
      <div className="header">
        <Link className={isHomePath ? 'active' : ''} to="/">
          {' '}
          HOME{' '}
        </Link>
        <Link className={isAboutPath ? 'active' : ''} to="/about">
          {' '}
          ABOUT US{' '}
        </Link>
      </div>
    );
  }
}

export default withRouter(Header);
