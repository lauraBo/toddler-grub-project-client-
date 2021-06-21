
//import { fetchRecipesPending, fetchRecipesSuccess, fetchRecipesError } from './fetchRecipesLoading';
import { FETCH_RECIPES_PENDING, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions/actionTypes';

function fetchRecipes() {
    return dispatch => {
        dispatch(fetchRecipesPending());
        fetch('http://localhost:3000/api/v1/recipes')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchRecipesSuccess(res.recipes));
            return res.recipes;
        })
        .catch(error => {
            dispatch(fetchRecipesError(error));
        })
    }
}

export default fetchRecipes;
