// asynchronus action creator:
export function addRecipe(recipeInfo) {

    return (dispatch) => {
      const recInfo = {
        title: recipeInfo.title,
        ingredients: recipeInfo.ingredients,
        instructions: recipeInfo.instructions,
        time: recipeInfo.time,
        freezable: recipeInfo.freezable
      }
      return fetch('http://localhost:3000/api/v1/recipes', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(recInfo)
      })
      .then(response => response.json())
      .then(response => { 
        if (response.error) {
          alert(response.error)
      } else {
        dispatch({type: 'ADD_RECIPE', payload: response.data})  
      }
     })
  .catch(console.log)
  }
}
