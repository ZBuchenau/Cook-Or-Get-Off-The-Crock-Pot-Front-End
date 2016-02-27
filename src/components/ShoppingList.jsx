import React from 'react/addons';
import ReactMixin from 'react-mixin';

module.exports = React.createClass({
  render: function() {
    return (
      <li>
        <p>{this.props.amount} {this.props.unit}- {this.props.name}</p>
      </li>
    )
  }
});
