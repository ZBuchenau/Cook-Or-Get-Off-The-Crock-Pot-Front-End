import {RECIPES_GET} from '../constants/recipeConstants.js';
import {LOGOUT_USER} from '../constants/LoginConstants';
import BaseStore from './BaseStore';

class RecipeStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._recipes = [];
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case RECIPES_GET:
        this._recipes = action.recipes;
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._quote = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get recipes() {
    return this._recipes;
  }
}

export default new RecipeStore();
