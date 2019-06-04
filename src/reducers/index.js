import { combineReducers } from "redux"
import { animalsReducer } from "./animals-reducer.js"
import {handleLoadingReducer} from "./handleLoading-reducer.js";

export const rootReducer = combineReducers({
  animals: animalsReducer,
  boolean: handleLoadingReducer
})