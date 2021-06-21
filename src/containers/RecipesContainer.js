import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRecipes, addRecipe, toggleRecipe} from '../actions/actionCreators'
//import fetchRecipes from '../actions/fetchRecipesMain';
//import {getRecipesError, getRecipes, getRecipesPending} from '../reducers/recipeReducer';
import Recipes from '../components/Recipes';
import RecipeInput from '../components/RecipeInput';
//import loading spinner?

class RecipesContainer extends Component {

    constructor(props) {
        super(props);
      }


      function fetchRecipes() {
            fetch('http://localhost:3000/api/v1/recipes')
            .then(res => res.json())
            .then(res => {
                this.props.dispatch(loadRecipes(res.data));
            })
            .catch(error => console.log(error))
            }
   

        componentWillMount() {
          this.fetchRecipes();
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
  
const mapDispatchToProps = dispatch => ({ addRecipe: recipe => dispatch({ type: "ADD_RECIPE", recipe}) })
                                          

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer); 

