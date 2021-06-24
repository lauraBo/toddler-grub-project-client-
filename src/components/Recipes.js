
import React, { Component } from 'react';
import Recipe from './Recipe';

class Recipes extends Component {

  render() {
    if (this.props.recipes){
      console.log(this.props.recipes)
    const recipes = this.props.recipes;
    const recipeList = recipes.map(recipe => {
      return (
        <Recipe recipename={recipe.title} recipeIngredients={recipe.ingredients}/>
      )
     }
    );

     return(
      <ul>
        {this.recipeList}
     </ul>
    );
    }
  }
};

export default Recipes;

//src/components/Recipe.js
////12:13:47 PM web.1 |    Line 8:11:  'recipeIngredients' is assigned a value but never used  no-unused-vars
//12:13:47 PM web.1 |  src/components/Recipes.js
<<<<<<< HEAD
//12:13:47 PM web.1 |    Line 12:11:  'recipeList' is assigned a value but never used  no-unused-vars
=======
//12:13:47 PM web.1 |    Line 12:11:  'recipeList' is assigned a value but never used  no-unused-vars
>>>>>>> aba3b9ce7b6503b297f3bde578ec480208c318e3
