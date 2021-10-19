import { combineReducers } from "redux"
import { modalsVisible } from "./modals-visible"

export const mainModule = combineReducers({
    modalsVisible
})

export * from "./modals-visible"
