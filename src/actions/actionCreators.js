import * as actions from '../actions/actionTypes'


export function loadRecipes(recipes) {
  return { type: actions.LOAD_RECIPES, recipes: recipes }
}

//export function addRecipe(id, title) {
  //return { type: actions.ADD_RECIPE, id: id, title: title }
//}

export function addRecipe(data) {

    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/recipes', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(recipe => dispatch({type: 'ADD_RECIPE', payload: recipe}))
    }
  
  }




