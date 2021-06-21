import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/fetchRecipes';
import {getRecipesError, getRecipes, getRecipesPending} from '../reducers/recipeReducer';
import Recipes from '../components/Recipes';
import RecipeInput from '../components/RecipeInput';
//import loading spinner?

class RecipesContainer extends Component {

    constructor(props) {
        super(props);
      }

        componentWillMount() {
          const {fetchRecipes} = this.props;
          fetchRecipes();
      }

    render() {
      return (
      <div>
        <RecipeInput addRecipe={this.props.addRecipe}/>
        <Recipes recipes={this.props.recipes}/>
      </div>
        )
      }
    }

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}
  
const mapDispatchToProps = dispatch => ({ addRecipe: recipe => dispatch({ type: "ADD_RECIPE", recipe}),
                                          {fetchRecipes} })

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer); 

