import React, { Component } from 'react';

class Recipe extends Component {


  render() {
    const item  = this.props.item
    //const recipeIngredients = this.props.recipeIngredients
if (!item){
  return null
}
    return (
      <div className="item">
        <li style={{listStyleType: 'none'}}>
        <div> {item.title} </div> 
        <div>(time: {item.time})</div> 
        Ingredients: {item.ingredients}
        Instructions: {item.instructions}
        <div>.</div>
        </li>
      </div>
      // how do i display all the fields? i.e ingredients, instructions, time etc 
    );
  }
};

export default Recipe;
