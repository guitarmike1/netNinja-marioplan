import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import mysql from 'mysql'
// import express from 'express'

const store = createStore(rootReducer, applyMiddleware(thunk));

// on 4/22/2020 - Theo additions for mysql
// const app = express();

// const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM videos'
// const connection = mysql.createConnection({
//     host:   'localhost',
//     use:    'root',
//     password: '',
//     database:   'mike'
// })

// connection.connect(err => {
//     if(err) {
//         return err;
//     }
// });

// console.log(connection)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
