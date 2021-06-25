
import React, { Component } from 'react';
import Recipe from './Recipe';

class Recipes extends Component {

  render() {
    if (this.props.recipes){
      console.log(this.props.recipes)
    const recipes = this.props.recipes;
    const recipeList = recipes.map((recipe, index) => {
      return (
        <Recipe item={recipe} key={index}/>
      )
     }
    );

     return(
      <ul>
        {recipeList}
     </ul>
    );
    }
  }
};

export default Recipes;

