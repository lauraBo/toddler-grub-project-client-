import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipes from '.components/Recipes';

class RecipesContainer extends Component {

    constructor() {
        super()

        this.state = {
          recipes: []
        }
      }
   // alternative code to fetch data from api
    //fetchRecipes() {
          //fetch('http://localhost:3000/api/v1/recipes')
         // .then(resp => resp.json())
         // .then (response => {
          //  this.setState({recipes: response.data})
          //})
         // .catch(error => console.log(error))
       // }

        componentDidMount() {
            const url = 'http://localhost:3000/api/v1/recipes';
            fetch(url)
              .then(response => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error("Network response was not ok.");
              })
              .then(response => this.setState({ recipes: response }))
              .catch(() => this.props.history.push("/"));
        }
  

        //componentDidMount() {
           // this.fetchRecipes()
         // }


  render() {
    return <Recipes recipes={this.props.recipes} />
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}
  


export default connect(mapStateToProps)(RecipesContainer);
