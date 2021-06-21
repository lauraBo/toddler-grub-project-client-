import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import recipeReducer from './reducers/recipeReducer.js';
import './index.css';
import App from './App';

//const store = createStore(recipeReducer, applyMiddleware(thunk));
// ?   const store = createStore(recipeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//ReactDOM.render(
 // <Provider store={store}>
  //  <App />
  //</Provider>,
 //// document.getElementById('root')
//);




    const AppWrapper = ({ children }) => {
        const store = createStore(recipeReducer, applyMiddleware(thunk));

        return (<Provider store={store}>{children}</Provider>);
    }

    render(<AppWrapper> <App /> </AppWrapper>, document.getElementById("root") )
