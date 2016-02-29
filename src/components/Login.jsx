import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService'
import { Route, RouteHandler, Link } from 'react-router';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.username, this.state.password)
      .then(function() {

      })
      .catch(function(err) {
        alert("There's an error logging in");
      });
  }

  render() {
    return (

      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">Cook Or Get Off The Crock Pot</h1>
          <p>Do you ever get tired of wandering around the store trying to figure out what to cook for dinner? <br/> Do you HATE meal-planning and creating grocery lists?<br/>You'd better Cook Or Get Off The Crock Pot.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Login</h2>
            <form className="well well-lg" action="index.html" method="post">
              <div className="form-group has-success label-floating">
                <label for="" className="control-label">Username</label>
                <input type="text" className="form-control" id="" placeholder="" valueLink={this.linkState('username')} />
                <p className="help-block">Please enter your username</p>
              </div>
              <div className="form-group has-success label-floating">
                <label for="" className="control-label">Password</label>
                <input type="password" className="form-control" id="password" ref="password" valueLink={this.linkState('password')} />
                <p className="help-block"></p>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary btn-raised material-hover" id="button-login" onClick={this.login.bind(this)}>Login</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h2>Sign Up</h2>
            <div className="well well-lg">
              <Link to='signup'>Sign up Now!<br/> Otherwise, you are dead to us.</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
