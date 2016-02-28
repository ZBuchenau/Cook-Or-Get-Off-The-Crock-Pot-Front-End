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
  sendText(phoneNumber) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    today = mm + '/' + dd + '/' + yyyy;
    var message = "Your Shopping List for " + today + "\n=========================\n";
    var list = this.getRecipesState().list;

    Object.keys(this.state.list).map(function(key, index, array) {
        message += RecipesStore.list[key].amount;
        message += RecipesStore.list[key].unit;
        message += "-" + key + "\n";
        return message;
    });

    request({
      url: 'http://localhost:3001/users/protected/text',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        phone: phoneNumber,
        message: message
      },
        headers: {
          'Authorization': 'Bearer ' + LoginStore.jwt
        }
      })
      .then(function(resopnse) {
        alert(response);

      });
  },
  requestRecipes(amount) {
    request({
      url: 'http://localhost:3001/recipes/random',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        amount: amount
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
      url: 'http://localhost:3001/recipes/shopping-list',
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
      console.log(response);
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
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="row">
            <button className="btn btn-primary btn-block btn-raised" onClick={this
              .requestRecipes
              .bind(this, 8)}>Get Recipes</button>
          </div>
          <div className="col-md-6">
            <h2 className="text-center">
              Recipe List
            </h2>
            <div>
              {this
                .state
                .recipes
                .map(function (recipe, index) {
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
            <button className="btn btn-primary btn-block btn-raised" onClick={this
              .sendText
              .bind(this, 9709994223)}>Send</button>
            <ul className="list-group well well-sm">
              {
              Object.keys(this.state.list).map(function(key, index, array) {
              return (
                  <ShoppingList
                    name={key}
                    amount={RecipesStore.list[key].amount}
                    unit={RecipesStore.list[key].unit}
                    key={"list" + key}
                    />
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
