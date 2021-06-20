export default function recipeReducer(state = {
    recipes: []
  }, action) {
    switch (action.type) {
  
      case 'ADD_RECIPE':
        return {
          ...state,
          recipes: [...state.recipes, action.recipe]
        }
        case 'LOADING_RECIPES':
      return {
        ...state,
        cats: [...state.recipes],
        loading: true
      }
        case 'DISPLAY_RECIPES': //or should this be names FETCH_RECIPES
          return{


          }
          
      default:
        return state;
  
    }
  };


 