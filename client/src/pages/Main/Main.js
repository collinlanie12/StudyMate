import React, { Component } from "react";
//import { Redirect } from 'react-router-dom';
import Bubble from "../../components/Toast/Toast";
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
          <div class="row">
            <div class="col-3 leftSide">
              <div class="sidenav">
                <a href="#">My Posts</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
            </div>

            <div class="text-center col-6 middleRow">
              <h2 class="mt-3 mb-4" >suggested for you</h2>
              <Bubble userType="student" />
              <Bubble userType="student" />
              <Bubble userType="student" />
              <Bubble userType="student" />
              <Bubble userType="student" />
              <Bubble userType="student" />
              <Bubble userType="student" />
              <Bubble userType="student" />
              <Bubble userType="student" />
            </div>

            <div class="col-3 rightSide">
              <h1 class="text-center calTitle">Calendar</h1>
                <span class="crud transitioning">
                  <strong>Math</strong>
                  <p>You have math at 3pm you piece of shit</p>
                </span>

            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Main;
