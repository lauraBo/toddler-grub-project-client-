import React from 'react';
import Recipe from './Recipe';


const Recipes = props => {
  const recipes = props.recipes.map((recipe, index) => {
    return <li key={index}>{recipe.title}</li>;
  });

  return (
    <div>
      {recipes}
    </div>
  );

};

export default Recipes;
