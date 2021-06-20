export const addRecipe = (recipe) => {
    return {
      type: 'ADD_RECIPE',
      recipe
    };
  };







  export const fetchRecipes = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_RECIPES'})
      fetch('http://localhost:3000/api/v1/recipes').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'DISPLAY_RECIPES', recipes: responseJSON.text })
      })
    }
  }