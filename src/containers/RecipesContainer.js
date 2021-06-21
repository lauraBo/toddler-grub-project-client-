import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/fetchRecipes';
import Recipes from '../components/Recipes';
import RecipeInput from '../components/RecipeInput';

class RecipesContainer extends Component {

    constructor() {
        super()
        this.state = {
          recipes: []
        }
      }

    componentDidMount() {
      this.props.fetchRecipes()
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer); //how do I add fetchRecipes?

