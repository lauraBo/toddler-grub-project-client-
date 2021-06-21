export const FETCH_RECIPES_PENDING = 'FETCH_RECIPES_PENDING';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';

function fetchRecipesPending() {
    return {
        type: FETCH_RECIPES_PENDING
    }
}

function fetchRecipesSuccess(recipes) {
    return {
        type: FETCH_RECIPES_SUCCESS
        recipes: recipes
    }
}

function fetchRecipesError(error) {
    return {
        type: FETCH_RECIPES_ERROR
        error: error
    }
}


