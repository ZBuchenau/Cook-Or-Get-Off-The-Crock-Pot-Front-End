import request from 'reqwest';
import when from 'when';
import {
  LOGIN_URL,
  SIGNUP_URL
} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {

  login(username, password) {
    return this.handleAuth(when(request({
      url: 'http://localhost:3001/users/authenticate',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username,
        password
      }
    })));
  }

  logout() {
    LoginActions.logoutUser();
  }

  signup(username, password, phone) {
    console.log('dslfjsldkjsdlfksdfjlsdkj');
    // username = this.state.username;
    // console.log(username);
    return $.ajax(
      {
        type: "POST",
        url: 'http://localhost:3001/users/signup',
        data: {username, password, phone}
      }
    );
      // return this.handleAuth(when(request({
      //   url: 'http://localhost:3001/users/signup',//SIGNUP_URL,
      //   method: 'POST',
      //   crossOrigin: true,
      //   type: 'json',
      //   data: {
      //     username, password, phone
      //   }
      // })));
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        var jwt = response.token;
        console.log(jwt);
        LoginActions.loginUser(jwt);
        return true;
      });
  }
}

export default new AuthService()
