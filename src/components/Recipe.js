import React, { Component } from 'react';

class Recipe extends Component {


  render() {
    const recipename  = this.props.recipename
    const recipeIngredients = this.props.recipeIngredients

    return (
      <div>
        <li>
          {recipename}  
          {recipeIngredients}
        </li>
      </div>
      // how do i display all the fields? i.e ingredients, instructions, time etc 
    );
  }
};

export default Recipe;