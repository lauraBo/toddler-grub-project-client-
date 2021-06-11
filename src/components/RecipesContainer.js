import React, { Component } from 'react'

class RecipesContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {
          recipes: []
        }
      }



    fetchRecipes() {
          fetch('http://localhost:3000/api/v1/recipes', {
          mode: 'no-cors',
         })
          .then(resp => resp.json())
          .then (response => {
            this.setState({Recipes: response.data})
          })
          .catch(error => console.log(error))
        }
  

        componentDidMount() {
            this.fetchRecipes()
          }


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

export default RecipesContainer