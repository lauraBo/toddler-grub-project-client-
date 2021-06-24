import * as actions from '../actions/actionTypes'


export function fetchRecipes(recipes) {
  return { type: actions.FETCH_RECIPES, recipes: recipes }
}

