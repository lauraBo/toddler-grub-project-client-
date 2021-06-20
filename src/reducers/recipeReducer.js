export default function recipeReducer(state = {
    recipes: []
  }, action) {
    switch (action.type) {
  
      case 'ADD_RECIPE':
        return {
          ...state,
          recipes: [...state.recipes, action.recipe]
        }
  
      default:
        return state;
  
    }
  };