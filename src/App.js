import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import RecipesContainer from './RecipesContainer';
import RecipeInput from '../components/RecipeInput';

class App extends Component {
  render() {
    return (
      <Router>
       <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={RecipesContainer} />
        <Route exact path="/recipeinput" component={RecipeInput} />
        </div>
      </Router>
        





        //<div className="header">
        //  <h1>Recipe List</h1>
        //</div>
       // <RecipesContainer />
      
      
    );
  }
}

export default App;
