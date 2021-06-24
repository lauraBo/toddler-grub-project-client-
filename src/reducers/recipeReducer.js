
import { FETCH_RECIPES, ADD_RECIPE } from '../actions/actionTypes'


const initialState =
{ recipes:[]}


function recipeReducer(state = initialState, action) {
    
  switch (action.type) {
  
      case FETCH_RECIPES:
        return {recipes: action.payload}

        case ADD_RECIPE:
     return {
        ...state,
        //{
         // id: action.id,
         // title: action.title,
         // ingredients: action.ingredients,
         // time: action.time,
         // freezable: action.freezable
       // }
     // ];
      recipes: [...state.recipes, action.payload]} //action.recipe?

      default:
        return state;
  
    }
  };

export default recipeReducer
