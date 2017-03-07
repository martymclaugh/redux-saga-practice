import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="text-center">
      <nav className="navbar navbar-default">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="library">Library</Link>
      </nav>
    </div>
  )
}

export default Header;
