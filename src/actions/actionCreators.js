import * as actions from '../actions/actionTypes'


export function loadRecipes(recipes) {
  return { type: actions.LOAD_RECIPES, recipes: recipes }
}

// asynchronus action creator:
export function addRecipe(data) {

    return (dispatch) => {
      const recipeData = {
        title: data.title,
        ingredients: data.ingredients,
        instructions: data.instructions,
        time: data.time,
        freezable: data.freezable
      }
      return fetch('http://localhost:3000/api/v1/recipes', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(recipeData)
      })
      .then(response => response.json())
      .then(response => { 
        if (response.error) {
          alert(response.error)
      } else {
        dispatch({type: 'ADD_RECIPE', payload: response.data})  
    }
  })
  }
}
