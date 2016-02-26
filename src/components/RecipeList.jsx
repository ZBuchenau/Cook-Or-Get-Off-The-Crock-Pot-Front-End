var React = require('react/addons');
var Recipe = require('./Recipe.jsx');
var AddRecipe = require('./AddRecipe.jsx');

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
  render:function(){
    return (
    <div>
      <h1> Recipe List </h1>
      <div>
        {recipes.map(function(recipe, index){
          return (
              <Recipe
              title={recipe.title}
              image={recipe.img_url}
              prepTime={recipe.prep_time}
              instructions={recipe.instructions}
              credit={recipe.credit_text}
              likes={recipe.likes}
              servings={recipe.servings}
              key={"item"+index} />
          )
        })
      }
      </div>
      <AddRecipe />
    </div>
  )
  }
})
