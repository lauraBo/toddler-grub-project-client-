import React, { Component } from 'react';

class Recipe extends Component {


  render() {
    const { recipe } = this.props;

    return (
      <div>
        <li>
          {recipe.text}  
        </li>
      </div>
      // how do i display all the fields? i.e ingredients, method, time etc 
    );
  }
};

export default Recipe;