import { createStore, applyMiddleware, compose } from "redux";
import { logger } from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import { sayHiOnDispatch, includeMeaningOfLife } from "../exampleAddons/enhancers";
import { print1, print2, print3 } from "../exampleAddons/middleware";

export const store = createStore(rootReducer, applyMiddleware(print1, print2, print3))
