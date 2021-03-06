import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import PostContext from "../../contexts/PostContext";
import ModalContext from "../../contexts/ModalContext";
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Main from '../../pages/Main/Main';
import NotFound from '../../pages/NotFound/NotFound';
import UserSettings from '../../pages/UserSettings/UserSettings'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
    }

    this.handleSubmit = (bool) => {
      this.setState(prevState => ({ postSub: { ...prevState.postSub, submitted: bool } }));
    }

    this.handleClose = (bool) => {
      this.setState(prevState => ({ modal: { ...prevState.modal, showCon: bool } }));
    }

    this.afterClose = (loob) => {
      this.setState(prevState => ({ modal: { ...prevState.modal, showCon: loob } }));
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      },
      postSub: {
        submitted: undefined,
        onPostSubmit: this.handleSubmit
      },
      modal: {
        showCon: undefined,
        handleClose: this.handleClose,
        afterClose: this.afterClose
      }
    }
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <PrivateRoute path='/user-settings' component={UserSettings} />
              <ModalContext.Provider value={this.state.modal}>
                <PostContext.Provider value={this.state.postSub}>
                  <PrivateRoute path='/main' component={Main} />
                </PostContext.Provider>
              </ModalContext.Provider>
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
