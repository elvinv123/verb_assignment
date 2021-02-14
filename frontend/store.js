import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk';

const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
