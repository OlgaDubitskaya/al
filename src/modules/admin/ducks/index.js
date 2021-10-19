import { combineReducers } from "redux"
import { userInfo  } from "./userInfo"

export const adminModule = combineReducers({
    userInfo
})

export * from "./userInfo"