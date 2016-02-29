var React = require('react/addons');
var Recipe = require('./Recipe.jsx');
var ShoppingList = require('./ShoppingList.jsx');
import RecipesStore from '../stores/recipesStore.js';
import RecipesActions from '../actions/recipesActions';
import LoginStore from '../stores/LoginStore.js';
import {RECIPES_URL, LIST_URL, TEXT_URL} from '../constants/recipeConstants.js';
import request from 'reqwest';
import jwt_decode from 'jwt-decode';

var RecipeList = React.createClass({

  getInitialState: function() {

    return {
      recipes: [],
      list: [],
      meals: 1
    };
  },

  sendText() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;
    var message = "Your Shopping List for " + today + "\n=========================\n";
    var list = this.getRecipesState().list;
    Object.keys(this.state.list).map(function(key, index, array) {
      message += key + " - ";
      message += RecipesStore.list[key].amount + " ";
      message += RecipesStore.list[key].unit + "\n";
      return message;
    });

    request({
      url: TEXT_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        phone: jwt_decode(LoginStore._jwt).phone,
        message: message
      },
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      }
    }).then(function(resopnse) {
      alert(response);

    });
  },
  requestRecipes() {
    request({
      url: RECIPES_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        amount: this.state.meals
      },
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      }
    }).then((response) => {
      RecipesActions.gotRecipes(response);
      this.setState(this.getRecipesState());
      this.requestList();
    });
  },
  requestList() {
    request({
      url: LIST_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        recipes: JSON.stringify(this.getRecipesState().recipes)
      },
      headers: {
        'Authorization': 'Bearer ' + LoginStore.jwt
      }
    }).then((response) => {
      RecipesActions.gotList(response);
      this.setState(this.getRecipesState());
    });
  },
  _onChange() {
    this.setState(this.getRecipesState());
  },
  getRecipesState() {
    return {recipes: RecipesStore.recipes, list: RecipesStore.list, meals: this.state.meals};
  },

  mealNumber() {

    this.state.meals = this.refs.meals.getDOMNode().value;

  },
  
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="form-group has-success">
              <label htmlFor="select222" className="col-md-2 control-label">Select Number of Meals</label>

              <div className="col-md-10">
                <select ref='meals' id="select222" className="form-control" onChange={this.mealNumber}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <button id="button-recipes" className="btn btn-primary btn-block btn-raised material-hover" onClick={this.requestRecipes.bind(this)}>Get Recipes</button>

          </div>
          <div className="col-md-6">
            <h2 className="text-center">
              Recipe List
            </h2>
            <div>
              {this.state.recipes.map(function(recipe, index) {
                return (
                  <Recipe title={recipe.title} image={recipe.img_url} prepTime={recipe.prep_time} instructions={recipe.instructions} credit={recipe.credit_text} likes={recipe.likes} servings={recipe.servings} key={"item" + index}/>
                )
              })
}
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-center">
              Grocery List
            </h2>
            <button id="button-text" className="btn btn-primary btn-block btn-raised material-hover" onClick={this.sendText.bind(this)}>Text me my shopping list!</button>
            <ul className="list-group well well-sm">
              {Object.keys(this.state.list).map(function(key, index, array) {
                if (RecipesStore.list[key].amount == 0) {
                  RecipesStore.list[key].amount = '';
                  RecipesStore.list[key].unit = '';
                }
                return (
                  <ShoppingList name={key} amount={RecipesStore.list[key].amount} unit={RecipesStore.list[key].unit} key={"list" + key}/>
                )
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
