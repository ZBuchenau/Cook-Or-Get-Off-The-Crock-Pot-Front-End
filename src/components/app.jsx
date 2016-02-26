var React = require('react')
var navbar = require('./navbar.jsx');
var signup = require('./signup.jsx');
var recipes = require('./RecipeList.jsx');

var navbarElement = React.createElement(navbar);
var signupElement = React.createElement(signup);
var recipeElement = React.createElement(recipes);


ReactDOM.render(recipeElement, document.querySelector('#recipes'));
ReactDOM.render(navbarElement, document.querySelector('.reactNavbarContainer'));
// ReactDOM.render(signupElement, document.querySelector('#signup'));
