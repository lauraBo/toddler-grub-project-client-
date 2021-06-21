
import { FETCH_RECIPES_PENDING, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions/actionTypes';


export function fetchRecipesPending() {
    return {
        type: FETCH_RECIPES_PENDING
    }
}

export function fetchRecipesSuccess(recipes) {
    return {
        type: FETCH_RECIPES_SUCCESS,
        recipes: recipes
    }
}

export function fetchRecipesError(error) {
    return {
        type: FETCH_RECIPES_ERROR,
        error: error
    }
}