import React from 'react/addons';
import ReactMixin from 'react-mixin';

module.exports = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
        <p>{this.props.amount} {this.props.unit}- {this.props.name}</p>
      </li>
    )
  }
});
