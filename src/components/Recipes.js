
import React, { Component } from 'react';
import Recipe from './Recipe';


class Recipes extends Component {

  render() {
    if (this.props.recipes){
    const recipes = this.props.recipes;
    const recipeList = recipes.map(recipe => {
      return (
        <Recipe
            recipe={recipe}
        />
      )
    })};

     // return(
      //<ul>
       // {this.recipeList}
     // </ul>
   // );
  }
};

export default Recipes;

