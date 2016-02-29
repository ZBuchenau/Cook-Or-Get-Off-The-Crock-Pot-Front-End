import request from 'reqwest';
import when from 'when';
import {
  LOGIN_URL,
  SIGNUP_URL
} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {

  login(username, password) {
    console.log({
      username,
      password
    });
    return this.handleAuth(when(request({
      url: LOGIN_URL,
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
    return $.ajax({
      type: "POST",
      url: SIGNUP_URL,
      data: {
        username,
        password,
        phone
      }
    });
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
