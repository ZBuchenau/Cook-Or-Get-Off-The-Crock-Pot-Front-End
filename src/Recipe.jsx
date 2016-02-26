var React = require('react/addons');

module.exports = React.createClass({
    render: function(){
      return (
        <div className='recipe-Recipe'>
          <img src={this.props.image} />
          <h3>{this.props.title}</h3>
          <div>Prep Time: {this.props.prepTime}min</div>
          <div>By: {this.props.credit}</div>
          <div>Likes: {this.props.likes}</div>
          <div>Servings: {this.props.servings}</div>
          <div>Instructions: {this.props.instructions}</div>
        </div>
      )
    }
})
