//import { FETCH_RECIPES_PENDING, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions/actionTypes';
//import { LOAD_RECIPES, ADD_RECIPE } from '../actions/actionTypes'


function recipeReducer(state = [], action) {
    
  switch (action.type) {
  
      case 'LOAD_RECIPES':
        //return action.recipes;
        return {recipes: action.payload}

        case 'ADD_RECIPE':
     return [
        ...state,
        {
          id: action.id,
          title: action.title,
          ingredients: action.ingredients,
          time: action.time,
          freezable: action.freezable
        }
      ];
      //return {...state, recipes: [...state.recipes, action.payload]};

      default:
        return state;
  
    }
  };

export default recipeReducer
