import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipes from '../components/Recipes';
import { fetchRecipes } from '../actions/fetchRecipes';


class RecipesContainer extends Component {


        componentDidMount() {
          this.props.fetchRecipes();
          console.log(this.props);
      }

    render() {
      return (
      <div className="App">
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
  
//const mapDispatchToProps = dispatch => ({ 
  //loadRecipes: recipes => dispatch({ type: "LOAD_RECIPES", recipes}),
 // addRecipe: recipe => dispatch({ type: "ADD_RECIPE", recipe}) 
//})
                                          

export default connect(mapStateToProps, {fetchRecipes}) (RecipesContainer); 

//(mapDispatchToProps)