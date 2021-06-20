import React, { Component } from 'react';
import { addRecipe } from '../actions/recipes';
import { connect } from 'react-redux';

export class RecipeInput extends Component {

  state = {
    title: '',
    ingredients: '',
    method: '',
    time: '',
    freezable: ''
    
  }

  //can I use this to simplify code? ;
  //handleOnChange(event) {
    //this.setState({
      //name: event.target.value,
    //});
  //}

  handleOnTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  }

  handleOnIngredientsChange = event => {
      this.setState({
        ingredients: event.target.value
      });
    }

  handleOnMethodChange = event => {
    this.setState({
      method: event.target.value
    });
  }


  handleOnTimeChange = event => {
      this.setState({
        time: event.target.value
      });
    }


  handleOnFreezableChange = event => {
      this.setState({
        Freezable: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRecipe(this.state);
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnTitleChange(event)}
            value={this.state.title}
            placeholder="recipe name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnIngredientsChange(event)}
            value={this.state.ingredients}
            placeholder="ingredients" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnMethodChange(event)}
            value={this.state.method}
            placeholder="method" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnTimeChange(event)}
            value={this.state.time}
            placeholder="time" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnFreezableChange(event)}
            value={this.state.freezable}
            placeholder="freezable?" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

export default connect(null, { addRecipe })(RecipeInput);