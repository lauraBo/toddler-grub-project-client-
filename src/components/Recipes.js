import React from 'react';
import Recipe from './Recipe';
 
const RecipeList = ({ recipes }) => (
  <div className="recipe-list">
    { recipes.map(recipe=> <Recipe title={recipe.title} />) }
  </div>
)
 
export default Recipes;
