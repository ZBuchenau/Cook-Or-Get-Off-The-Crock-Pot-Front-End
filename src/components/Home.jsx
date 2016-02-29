import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';
import {Route, RouteHandler, Link} from 'react-router';
import jwt_decode from 'jwt-decode';

export default AuthenticatedComponent(class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-push-2">
            <div className="well well-sm">
              <h1 className="text-center">Hello {this.props.user ? this.props.user.username : ''}!</h1>
              <p> Thanks for signing in! To get started with your weekly meal planning head over to <Link to="grocery">the recipe picker</Link> and pick what meals sound good to you.</p>
              <p> Your number is <strong> { jwt_decode(this.props.jwt).phone } </strong> and will be sent a sms text of your shopping list.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
