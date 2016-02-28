var React = require('react/addons');

module.exports = React.createClass({
    render: function(){
      return (

          <div className='recipe-Recipe well well-sm row'>
              <div className='row'>
                <div className="col-md-12 text-center">
                  <h3>{this.props.title}</h3>
                </div>
              </div>

              <div className="col-md-6">
                <img src={this.props.image} className="img-responsive img-rounded" height="150" />
              </div>
              <div className="col-md-6">
                <p>Prep Time: {this.props.prepTime}min</p>
                <p>By: {this.props.credit}</p>
                <p>Likes: {this.props.likes}</p>
                <p>Servings: {this.props.servings}</p>
                <p>Instructions: </p>
                <a href={this.props.instructions}>Click to View!</a>
              </div>
          </div>

      )
    }
})
