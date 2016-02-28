'use strict';

import React from 'react';
import LoginStore from '../stores/LoginStore'
import {Route, RouteHandler, Link} from 'react-router';
import AuthService from '../services/AuthService'

export default class AuthenticatedApp extends React.Component {
  constructor() {
    super()
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {userLoggedIn: LoginStore.isLoggedIn()};
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default material-high" id="navbar-color">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">COGOTCP</Link>
            </div>
            <div className="navbar-collapse collapse navbar-responsive-collapse">
              <ul className="nav navbar-nav">
              </ul>
              {this.headerItems}
            </div>
          </div>
        </div>
        <RouteHandler/>
      </div>
    );
  }

  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }

  get headerItems() {
    if (!this.state.userLoggedIn) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="signup">Sign Up</Link>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="grocery">Grocery List</Link>
          </li>
          <li>
            <a href="" onClick={this.logout}>Logout</a>
          </li>
        </ul>
      )
    }
  }
}
