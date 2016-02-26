import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService'

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  }

  render() {
    return (

      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">Cook or get off the crock pot</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Login</h2>
            <form className="well well-lg" action="index.html" method="post">
              <div className="form-group label-floating">
                <label for="" className="control-label">Username</label>
                <input type="text" className="form-control" id="" placeholder="" valueLink={this.linkState('user')} />
                <p className="help-block">Please enter your username</p>
              </div>
              <div className="form-group label-floating">
                <label for="" className="control-label">Password</label>
                <input type="text" className="form-control" id="password" ref="password" valueLink={this.linkState('password')} />
                <p className="help-block"></p>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary btn-raised" onClick={this.login.bind(this)}>Login</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h2>Sign Up</h2>
            <div className="well well-lg">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
