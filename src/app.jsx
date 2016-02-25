var React = require('react')
var nav = require('./nav.jsx');
var navbar = require('./navbar.jsx');

var navbarElement = React.createElement(navbar);
var element = React.createElement(nav);
ReactDOM.render(element, document.querySelector('.reactContainer'));
ReactDOM.render(navbarElement, document.querySelector('.reactNavbarContainer'));
