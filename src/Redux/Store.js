import { Tuple, combineReducers, configureStore } from "@reduxjs/toolkit";
import { PetReducer } from "./Reducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk"

const rootReducer = combineReducers({ pet: PetReducer });
const petStore = configureStore({ reducer: rootReducer, middleware: () => new Tuple(thunk, logger) });

export default petStore;