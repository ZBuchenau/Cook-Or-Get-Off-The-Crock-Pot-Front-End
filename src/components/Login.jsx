import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService'
import { Route, RouteHandler, Link } from 'react-router';

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
      .then(function() {
        console.log('asldkfjlasdfkjafsdlkjhadsflkjadsfgladskjhdfsalkjsa');
      })
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
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p>
            <a className="btn btn-primary btn-lg">Learn more</a>
          </p>
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
              <button type="submit" classNameName="btn btn-default" onClick={this.login.bind(this)}>Login</button>
            </form>
          </div>
          <div className="col-md-6">
            <h2>Sign Up</h2>
            <div className="well well-lg">
              <Link to='signup'>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
