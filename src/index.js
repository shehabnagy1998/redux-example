// user defined files
import 'materialize-css/dist/css/materialize.min.css'
import $ from 'jquery';
import M from 'materialize-css'
// react defined files
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux files
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Reducers/rootReducers'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
