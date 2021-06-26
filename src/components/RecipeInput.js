import React, { Component } from 'react';
import { addRecipe } from '../actions/addRecipe';
import { connect } from 'react-redux';

export class RecipeInput extends Component {

  state = {
    title: '',
    ingredients: '',
    instructions: '',
    time: '',
    freezable: ''  
  }
  handleOnInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnFreezableChange = event => {
      this.setState({
        freezable: event.target.checked
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRecipe(this.state)
    .then( () => {
      this.props.history.push('/recipes')
    } )     //do i need to add this.setState to clear form?
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            name='title'
            onChange= {this.handleOnInputChange}
            value={this.state.title}
            placeholder="recipe name" />
        </p>
        <p>
          <input
            type="text"
            name='ingredients'
            onChange= {this.handleOnInputChange}
            value={this.state.ingredients}
            placeholder="ingredients" />
        </p>
        <p>
          <input
            type="text"
            name="instructions"
            onChange= {this.handleOnInputChange}
            value={this.state.instructions}
            placeholder="instruction" />
        </p>
        <p>
          <input
            type="text"
            name="time"
            onChange= {this.handleOnInputChange}
            value={this.state.time}
            placeholder="time" />
        </p>
        <p> <label>
          <input
            type="checkbox"
            onChange={(event) => this.handleOnFreezableChange(event)}
            checked={this.state.freezable}
             /> 
             freezable?
             </label> </p>
        <input type="submit" />
      </form>
    );
  }
};

export default connect(null, { addRecipe })(RecipeInput)