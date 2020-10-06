import React, { Component } from "react";
//import { Redirect } from 'react-router-dom';

import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";

class Main extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: "",
  };

  componentDidMount() {
    API.Main.getAll(this.context.authToken)
      .then((response) => response.data)
      .then((secrets) => this.setState({ secrets }))
      .catch((err) => {
        if (err.response.status === 401) {
          return this.setState({ error: "Unauthorized. Please login." });
        }

        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div className="Secret">
        <div className="row">
          {this.state.isLoading ? (
            <div className="alert alert-success">Loading...</div>
          ) : this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
          ) : (

              <div className="col">
                <p>eat shit</p>
              </div>

          )}
        </div>
      </div>
    );
  }
}

export default Main;
