export const SET_BUYOUT_APPLICATION_VISIBLE = "mainModule/modalsVisile/SET_BUYOUT_APPLICATION_VISIBLE"

const initialState = {
    buyoutApplicationVisible: false
}

export const setBuyoutApplicationVisible = data => ({
    type: SET_BUYOUT_APPLICATION_VISIBLE, data
})

export const modalsVisible = (state = initialState, action) => {
    switch(action.type) {
        case SET_BUYOUT_APPLICATION_VISIBLE: 
            return { 
                ...state, 
                buyoutApplicationVisible: action.data 
            }
        default:
            break
    }
    return state
}