import {RECIPES_GET} from '../constants/recipeConstants.js';
import {LIST_GET} from '../constants/recipeConstants.js';
import {LOGOUT_USER} from '../constants/LoginConstants';
import BaseStore from './BaseStore';

class RecipeStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._recipes = [];
    this._list = [];
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case LIST_GET:
        this._list = action.list;
        this.emitChange();
        break;
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

  get list() {
    return this._list;
  }
}

export default new RecipeStore();
