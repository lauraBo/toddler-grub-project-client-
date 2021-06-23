import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from './components/NavBar';
import RecipesContainer from './containers/RecipesContainer';
import RecipeInput from './components/RecipeInput';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <Router>
       <div className="app">
        <NavBar bg='dark' />
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={RecipesContainer} />
        <Route exact path="/recipeinput" component={RecipeInput} />
        </div>
      </Router>
        
      
      
    );
  }
}

export default App;
