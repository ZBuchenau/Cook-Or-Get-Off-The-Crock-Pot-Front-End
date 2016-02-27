var React = require('react/addons');
var Recipe = require('./Recipe.jsx');
var ShoppingList = require('./ShoppingList.jsx');
import RecipesStore from '../stores/recipesStore.js';
import RecipesActions from '../actions/recipesActions';
import LoginStore from '../stores/LoginStore.js';
import {RECIPE_URL} from '../constants/recipeConstants.js';
import request from 'reqwest';

var RecipeList = React.createClass({
  getInitialState: function() {
    return {
      recipes: []
    };
  },
  requestRecipes(amount) {
    request({
      url: 'http://localhost:3001/recipes/random',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        amount: amount,
      },
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      }
    })
    .then((response) => {
      console.log(response);
      RecipesActions.gotRecipes(response);
      this.setState(this.getRecipesState());
    });
  },
  requestList() {
    request({
      url: 'http://localhost:3001/recipes/shopping-list',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        recipes: this.getRecipesState(),
      },
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      }
    })
  },
  _onChange() {
    this.setState(this.getRecipesState());
  },
  getRecipesState() {
    return {
      recipes: RecipesStore.recipes
    };
  },
  render: function(){
    return (
    <div className="container">
      <div className="col-md-6">
        <h2 className="text-center"> Recipe List </h2>
        <button onClick={this.requestRecipes.bind(this, 5)}>Get Recipes</button>
        <div>
          {this.state.recipes.map(function(recipe, index){
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
      </div>
      <div className="col-md-6">
        <ShoppingList />
      </div>
    </div>
  )
  }
})

module.exports = RecipeList;
