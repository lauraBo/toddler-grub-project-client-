import React, { Component } from 'react'

class RecipesContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {
          recipes: []
        }
      }

    



    //fetchRecipes() {
          //fetch('http://localhost:3000/api/v1/recipes')
         // .then(resp => resp.json())
         // .then (response => {
          //  this.setState({recipes: response.data})
          //})
         // .catch(error => console.log(error))
       // }

        componentDidMount() {
            const url = 'http://localhost:3000/api/v1/recipes';
            fetch(url)
              .then(response => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error("Network response was not ok.");
              })
              .then(response => this.setState({ recipes: response }))
              .catch(() => this.props.history.push("/"));
        }
  

        //componentDidMount() {
           // this.fetchRecipes()
         // }


  render() {
    return (
      <div>
	    <div className="inputContainer">
	    <input className="RecipeInput" type="text" 
	    placeholder="Add a Recipe" maxLength="50" />
      onKeyPress={this.createRecipe} />
	    </div>  	    
      <div className="container-fluid">
	    <ul className="recipeList">
		  
      {this.state.recipes.map((recipe) => {

		    return(
		      <li className="recipe" recipe={recipe} key={recipe.id}>
			<input className="recipeCheckbox" type="checkbox" />              
			<label className="recipeLabel">{recipe.title}</label>
			<span className="deleteRecipeBtn">x</span>
		      </li>
		    )       
		  })} 	

	   </ul>
	   </div>
      </div>    
    )
  }
}


export default RecipesContainer