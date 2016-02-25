var React = require('react')
var navbar = require('./navbar.jsx');

var navbarElement = React.createElement(navbar);

ReactDOM.render(navbarElement, document.querySelector('.reactNavbarContainer'));
