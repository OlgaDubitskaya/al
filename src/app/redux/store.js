import { createStore, applyMiddleware } from "redux"
import Logger from "redux-logger"
import thunk from "redux-thunk"
import { redusers } from "./reducers"

export const store = createStore(redusers, applyMiddleware(
	thunk,
	Logger
))