
import React, { Component } from 'react';
import Recipe from './Recipe';


class Recipes extends Component {

  render() {
    if (this.props.recipes){
    const recipes = this.props.recipes;
    const recipeList = recipes.map(recipe => {
      return (
        <Recipe
            key={recipe.id}
            recipe={recipe}
        />
      )
    })};

      return(
      <ul>
        {this.props.recipes}
      </ul>
    );
  }
};

export default Recipes;
