import React from 'react';
import ReactDOM from 'react-dom';
import IndexComponent from './indexComponent';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import defaultState from '../redux/initState';
import reducers from '../redux/reducers';
import like from '../redux/addName';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const reducerall = combineReducers({...reducers, ...like});
const store = createStore(
    reducerall,
    defaultState,
    applyMiddleware(thunk));
console.log(store);
console.log(store.getState());

ReactDOM.render(
    <Provider store = { store }><IndexComponent/></Provider>,
    document.getElementById('index-root')
);
