import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService';
import RouterContainer from '../services/RouterContainer';


export default class Signup extends React.Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      phone: ''
    };
  }

  signup(e) {
    e.preventDefault();
    Auth.signup(this.state.username, this.state.password, this.state.phone)
      .done(function(data) {
        console.log(data);
        if (data === 'success') {
          RouterContainer.get().transitionTo('/login');
        } else {
          alert('Invalid Account');
        }
      });
      // .catch(function(err) {
      //   alert("There's an error logging in");
      //   console.log("Error logging in", err);
      // });
  }

  render() {
    return (
      <div className="container well well-sm">
        <div className="row">
          <div className="col-md-12">
            <div className="well well-sm text-center">
              <h1>Sign Up</h1>
              <p>Please fill out the form to get started planning out your meals!</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="well well-sm">
              <form role="form">

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group label-floating">
                      <label htmlFor="first" className="control-label">First Name</label>
                      <input type="text" className="form-control" id="first" />
                      <p className="help-block">First name please</p>
                    </div>
                    <div className="form-group label-floating">
                      <label htmlFor="last" className="control-label">Last Name</label>
                      <input type="text" className="form-control" id="last" />
                      <p className="help-block">Last name you heathen</p>
                    </div>
                    <div className="form-group label-floating">
                      <label htmlFor="email" className="control-label">E-mail</label>
                      <input type="email" className="form-control" id="email" />
                      <p className="help-block">An email so we can send you all our marketing and advertising nonsense</p>
                    </div>
                    <div className="form-group label-floating">
                      <label htmlFor="phone" className="control-label">Phone Number</label>
                      <input type="tel" className="form-control" id="phone" valueLink={this.linkState('phone')} />
                      <p className="help-block">Express yourself creativly!</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group label-floating">
                      <label htmlFor="username" className="control-label">Username</label>
                      <input type="text" className="form-control" id="username"  valueLink={this.linkState('username')} onChange={this.handleUsernameChange}/>
                      <p className="help-block">Express yourself creativly!</p>
                    </div>
                    <div className="form-group label-floating">
                      <label htmlFor="password" className="control-label">Password</label>
                      <input type="password" className="form-control" id="password" valueLink={this.linkState('password')} ref="password" />
                      <p className="help-block">The longet the better!</p>
                    </div>
                    <div className="form-group label-floating">
                      <label htmlFor="password-re" className="control-label">Retype Password</label>
                      <input type="password" className="form-control" id="password-re" />
                      <p className="help-block">Make it the same</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary btn-block btn-raised" onClick={this.signup.bind(this)}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    //   <div className="login jumbotron center-block">
    //     <h1>Signup</h1>
    //     <form role="form">
    //     <div className="form-group">
    //       <label htmlFor="username">Username</label>
    //       <input type="text" valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Username" />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password</label>
    //       <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="extra">Extra</label>
    //       <input type="text" valueLink={this.linkState('extra')} className="form-control" id="password" ref="password" placeholder="Some extra information" />
    //     </div>
    //     <button type="submit" className="btn btn-default" onClick={this.signup.bind(this)}>Submit</button>
    //   </form>
    // </div>
    );
  }
}

ReactMixin(Signup.prototype, React.addons.LinkedStateMixin);
