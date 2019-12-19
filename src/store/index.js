import initialData from '../data/data';
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, initialData, applyMiddleware(thunk));

export default store;