import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRecipes, addRecipe } from '../actions/actionCreators'
import Recipes from '../components/Recipes';
import RecipeInput from '../components/RecipeInput';


class RecipesContainer extends Component {


      constructor(props) {
        super(props)
        this.state = {
          recipes: [],
        };
      }


      fetchRecipes() {
        return (dispatch) => {
            fetch('http://localhost:3000/api/v1/recipes')
            .then(res => res.json())
            .then(res => {
                this.props.dispatch(loadRecipes(res.data));
            })
            .catch(error => console.log(error))
            }
          }
            
   

        componentDidMount() {
          this.fetchRecipes();
      }

    render() {
      return (
      <div>
          <Recipes recipes={this.props.recipes}/>
         <RecipeInput addRecipe={this.props.addRecipe}/>
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

