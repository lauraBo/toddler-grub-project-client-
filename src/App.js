import React, { Component } from 'react';
import './App.css';
import RecipesContainer from './components/RecipesContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Recipe List</h1>
        </div>
        <RecipesContainer />
      </div>
    );
  }
}

export default App;
