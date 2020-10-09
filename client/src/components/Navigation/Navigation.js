import React, { Component } from "react";
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import AuthContext from "../../contexts/AuthContext";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";
import NotificationBell from "../NotificationBell/NotificationBell";

import "./Navigation.css";

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true,
  };

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && "show"}`;
    const togglerClass = `navbar-toggler ${collapsed && "collapsed"}`;

    return (
      <div className="Navigation sticky-top">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark tealAndPurple mb-3">
          <span className="navbar-brand">
            StudyMate
          </span>
          <button
            className={togglerClass}
            onClick={this.toggleCollapse}
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={targetClass} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={this.toggleCollapse}>
                  Home
                </Link>
              </li>
              {user && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/main"
                    onClick={this.toggleCollapse}
                  >
                    Main
                  </Link>
                </li>
              )}
            </ul>
                
            <ul className="navbar-nav">
              {/* =================================================Notification Bell============================================= */}


                <NotificationBell/>


              {/* Drop Down user email and logout */}

              {user ? (
                <AuthDropdown onClick={this.toggleCollapse} />
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={this.toggleCollapse}
                  >
                    Login/Register
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
