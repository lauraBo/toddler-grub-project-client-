import React, { Component } from 'react';

class Recipe extends Component {


  render() {
    const item  = this.props.item
    //const recipeIngredients = this.props.recipeIngredients
if (!item){
  return null
}
    return (
      <div>
        <li>
          {item.title}  (time: {item.time})
        </li>
      </div>
      // how do i display all the fields? i.e ingredients, instructions, time etc 
    );
  }
};

export default Recipe;