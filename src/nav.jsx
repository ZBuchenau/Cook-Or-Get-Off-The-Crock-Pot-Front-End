var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <nav>
      <ul>
        <a href="home.html"><li>Home</li></a>
        <a href="about.html"><li>About</li></a>
        <a href="helloWorld.html"><li>Hello World</li></a>
      </ul>
    </nav>
  }
});
