import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';

import AuthContext from '../../contexts/AuthContext';

class AuthDropdown extends Component {
  static contextType = AuthContext;

  state = {
    isOpen: false
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = () => {
    this.context.onLogout();
    this.props.onClick();
  }

  render() {
    const { user } = this.context;
    const { isOpen } = this.state;

    const dropdownMenuClass = `dropdown-menu dropdown-menu-right ${isOpen && 'show'}`;

    return (
      <>
        <li className="nav-item dropdown">
          <button className="btn dropdown-toggle" onClick={this.toggleOpen} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#d9d9d9"}}>
            <Gravatar className="rounded-circle" email={user.email} size={30} /> {user.email}
          </button>
          <div className={dropdownMenuClass} aria-labelledby="navbarDropdown">
            <div className="dropdown-item" onClick={this.handleLogout}>Logout</div>
            <Link className="dropdown-item" to="/user-settings">User Settings</Link>
          </div>
        </li>
      </>
    );
  }
}

export default AuthDropdown;
