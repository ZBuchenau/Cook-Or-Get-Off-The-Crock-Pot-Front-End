import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {RECIPES_GET} from '../constants/recipeConstants.js';

export default {
  gotRecipes: (recipes) => {
    AppDispatcher.dispatch({
      actionType: RECIPES_GET,
      recipes: recipes
    })
  }
}
