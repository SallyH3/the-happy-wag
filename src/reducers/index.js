import React from 'react';
import { combineReducers } from 'redux';
import animalsReducer from './animals-reducer';

export const rootReducer = combineReducers => ({
  animals: animalsReducer
})