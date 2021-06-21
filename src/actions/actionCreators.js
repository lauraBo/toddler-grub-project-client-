
//import { FETCH_RECIPES_PENDING, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions/actionTypes';
import * as actions from '../actions/actionTypes'

//export function fetchRecipesPending() {
    //return {
        //type: FETCH_RECIPES_PENDING
   // }
//}

//export function fetchRecipesSuccess(recipes) {
    //return {
       // type: FETCH_RECIPES_SUCCESS,
       // recipes: recipes
   //// }
//}

//export function fetchRecipesError(error) {
    //return {
        //type: FETCH_RECIPES_ERROR,
        //error: error
    //}
//}


export function loadRecipes(recipes) {
  return { type: actions.LOAD_RECIPES, recipes: recipes }
}

export function addRecipe(id, title) {
  return { type: actions.ADD_RECIPE, id: id, title: title }
}

export function toggleRecipe(index) {
  return { type: actions.TOGGLE_RECIPE, index: index }
}