import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {RECIPES_GET} from '../constants/recipeConstants.js';
import {LIST_GET} from '../constants/recipeConstants.js';

export default {
  gotRecipes: (recipes) => {
    AppDispatcher.dispatch({
      actionType: RECIPES_GET,
      recipes: recipes
    })
  },
  gotList: (list) => {
    AppDispatcher.dispatch({
      actionType: LIST_GET,
      list: list
    })
  }
}
