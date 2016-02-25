var React = require('react')
var navbar = require('./navbar.jsx');
var signup = require('./signup.jsx');

var navbarElement = React.createElement(navbar);
var signupElement = React.createElement(signup);

ReactDOM.render(navbarElement, document.querySelector('.reactNavbarContainer'));
ReactDOM.render(signupElement, document.querySelector('#signup'));
