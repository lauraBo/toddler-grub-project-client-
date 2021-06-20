import React from 'react';
import Recipe from './Recipe';


class Recipes extends Component {

  render() {
    const { recipes } = this.props;
    const recipeList = recipes.map(recipe => {
      return (
        <Recipe
            key={recipe.id}
            recipe={recipe}
        />
      )
    });

    return(
      <ul>
        {recipeList}
      </ul>
    );
  }
};

export default Recipes;
