import { combineReducers } from "redux"
import { adminModule } from "../../modules/admin/ducks"
import { mainModule } from "../../modules/main/ducks"

export const redusers = combineReducers({
    adminModule,
    mainModule
})