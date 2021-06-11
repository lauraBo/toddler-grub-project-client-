import React, { Component } from 'react'

class RecipesContainer extends Component {
  render() {
    return (
      <div>
	<div className="inputContainer">
	  <input className="RecipeInput" type="text" 
	    placeholder="Add a Recipe" maxLength="50" />
	</div>  	    
	<div className="listWrapper">
	   <ul className="RecipeList">
	   </ul>
	</div>
      </div>    
    )
  }
}

export default TodosContainer