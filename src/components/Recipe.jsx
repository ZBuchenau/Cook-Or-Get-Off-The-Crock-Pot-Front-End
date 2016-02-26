var React = require('react/addons');

module.exports = React.createClass({
    render: function(){
      return (
        <div className='recipe-Recipe'>
          <img src={this.props.image} />
          <h3>{this.props.title}</h3>
          <p>Prep Time: {this.props.prepTime}min</p>
          <p>By: {this.props.credit}</p>
          <p>Likes: {this.props.likes}</p>
          <p>Servings: {this.props.servings}</p>
          <p>Instructions: </p>
          <a href={this.props.instructions}>{this.props.instructions}</a>
        </div>
      )
    }
})
