import React, { Component } from "react";
//import { Redirect } from 'react-router-dom';
import Bubble from "../../components/Toast/Toast";
import CalTab from "../../components/CalTab/CalTab";
import SearchBar from "../../components/SearchBar/SearchBar";
import SideNav from "../../components/SideNav/SideNav";

import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";


class Main extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: false,
    error: "",
  };

  // componentDidMount() {
  //   API.Main.getAll(this.context.authToken)
  //     .then((response) => response.data)
  //     .then((secrets) => this.setState({ secrets }))
  //     .catch((err) => {
  //       if (err.response.status === 401) {
  //         return this.setState({ error: "Unauthorized. Please login." });
  //       }

  //       console.log(err);
  //     })
  //     .finally(() => this.setState({ isLoading: false }));
  // }



  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div className="alert alert-success">Loading...</div>
        ) : this.state.error ? (
          <div className="alert alert-danger">{this.state.error}</div>
        ) : (
          <div className="row">
            <div className="col-3 leftSide">
            <SideNav/>
            </div>

            <div className="text-center col-6 middleRow">
              <h2 className="mt-3 mb-4" >suggested for you</h2>
              <SearchBar/>
              <Bubble userType="student" />
              <Bubble userType="student" />
              <Bubble userType="student" />
              <Bubble userType="student" />
              <Bubble userType="student" />
            </div>

            <div className="col-3 rightSide">
              <h1 className="text-center calTitle">Calendar</h1>
                <CalTab/>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Main;
