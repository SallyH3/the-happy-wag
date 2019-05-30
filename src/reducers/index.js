import { combineReducers } from 'redux';
import { animalsReducer } from './animals-reducer.js';

export const rootReducer = combineReducers({
  animals: animalsReducer
})