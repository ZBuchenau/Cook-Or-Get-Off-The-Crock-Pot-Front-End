var React = require('react')
var 
var helloWorld = require('./hello-world.jsx');

var element = React.createElement(helloWorld);
ReactDOM.render(element, document.querySelector('.container'));
