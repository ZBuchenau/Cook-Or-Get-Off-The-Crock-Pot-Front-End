var React = require('react/addons');
var Recipe = require('./Recipe.jsx');
var ShoppingList = require('./ShoppingList.jsx')

var recipes = [
  {
    "id": 9,
    "title": "Orecchiette, Broccoli Raab & Anchovies",
    "img_url": "https://spoonacular.com/recipeImages/orecchiette-broccoli-raab-anchovies-2-8.jpg",
    "prep_time": "45",
    "instructions": "http://www.finecooking.com/recipes/orecchiette-broccoli-raab-anchovies.aspx ",
    "credit_text": "undefined",
    "likes": 1,
    "servings": 4
  },
  {
    "id": 2,
    "title": "Fried Anchovies With Sage",
    "img_url": "https://spoonacular.com/recipeImages/fried_anchovies_with_sage-1.jpg",
    "prep_time": "60",
    "instructions": "http://latavolamarcherecipebox.blogspot.com/2009/10/fried-anchovies-with-sage.html",
    "credit_text": "undefined",
    "likes": 1,
    "servings": 0
  },
  {
    "id": 2,
    "title": "Fried Anchovies With Sage",
    "img_url": "https://spoonacular.com/recipeImages/fried_anchovies_with_sage-1.jpg",
    "prep_time": "60",
    "instructions": "http://latavolamarcherecipebox.blogspot.com/2009/10/fried-anchovies-with-sage.html",
    "credit_text": "undefined",
    "likes": 1,
    "servings": 0
  },
  {
    "id": 6,
    "title": "Bread, Butter And Anchovies",
    "img_url": "https://spoonacular.com/recipeImages/bread_butter_and_anchovies-5.jpg",
    "prep_time": "3",
    "instructions": "http://en.julskitchen.com/tuscany/grandma-mennas-kitchen-bread-butter-and-anchovies",
    "credit_text": "Juls Kitchen",
    "likes": 0,
    "servings": 0
  }
];

module.exports = React.createClass({
  getInitialState: function() {
    return {recipes: {}};
  },
  signup: function(e) {
    e.preventDefault();
    
  },
  render:function(){
    return (
    <div className="container">
      <div className="col-md-6">
        <h2 className="text-center"> Recipe List </h2>
        <div>
          {recipes.map(function(recipe, index){
            return (
                <Recipe
                title={this.recipe.title}
                image={this.recipe.img_url}
                prepTime={this.recipe.prep_time}
                instructions={this.recipe.instructions}
                credit={this.recipe.credit_text}
                likes={this.recipe.likes}
                servings={this.recipe.servings}
                key={"item"+index} />
            )
          })
        }
        </div>
      </div>
      <div className="col-md-6">
        <ShoppingList />
      </div>
    </div>
  )
  }
})
