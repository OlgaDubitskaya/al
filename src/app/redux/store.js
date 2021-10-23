import { createStore, applyMiddleware } from "redux"
import Logger from "redux-logger"
import thunk from "redux-thunk"
import { redusers } from "./reducers"

const middlewares = [thunk]

if (process.env.NODE_ENV === `development`) {
	console.log("process.env.NODE_ENV", process.env.NODE_ENV	)
  middlewares.push(Logger)
}
export const store = createStore(redusers, applyMiddleware(...middlewares))