import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Profile</Link>
          </li>
          <li><Link to ='/edit'>Edit</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
