import React, { Component } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/AuthContext";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";
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
          <Link className="navbar-brand" to="#">
            Project 3
          </Link>
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

              {user && (
              <form class="form-inline my-2 my-lg-0 searchBar">
                <input
                  class="form-control mr-sm-1"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-info my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
              )}

              <i
                className="fa fa-bell mr-3"
                style={{fontSize: "25px", color: "white"}}
              ></i>
            </ul>
            <ul className="navbar-nav">
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
