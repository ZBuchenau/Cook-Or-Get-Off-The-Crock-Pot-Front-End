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
      recipes: [],
      list: []
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
      RecipesActions.gotRecipes(response);
      this.setState(this.getRecipesState());
      this.requestList();
    });
  },
  requestList() {
    request({
      url: 'http://localhost:3001/recipes/shopping-list',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        recipes: JSON.stringify(this.getRecipesState().recipes),
      },
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      }
    })
    .then((response) => {
      RecipesActions.gotList(response);
      this.setState(this.getRecipesState());
    });
  },
  _onChange() {
    this.setState(this.getRecipesState());
  },
  getRecipesState() {
    return {
      recipes: RecipesStore.recipes,
      list: RecipesStore.list
    };
  },
  render: function(){
    return (
    <div className="container">
      <div className="row">
        <div className="row">
          <button className="btn btn-primary btn-block btn-raised"onClick={this.requestRecipes.bind(this, 8)}>Get Recipes</button>
        </div>
      <div className="col-md-6">
        <h2 className="text-center"> Recipe List </h2>
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
          <h2 className="text-center"> Grocery List </h2>
          <ul className="list-group well well-sm">
          {this.state.list.map(function(recipe, recipeIndex){
            return recipe.map(function(item, index) {
              item.amount = Math.ceil(item.amount);
              return (

                    <ShoppingList
                    name={item.name}
                    amount={item.amount}
                    aisle={item.aisle}
                    unit={item.unit}
                    key={"item"+index} />

              )
            })
            })
        }
        </ul>
        </div>
      </div>
      </div>
  )
  }
})

module.exports = RecipeList;
