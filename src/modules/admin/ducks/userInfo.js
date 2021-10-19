export const SET_AUTHORIZED = "adminModule/userInfo/SET_AUTHORIZED"

const initialState = {
    authorized: false
}

export const setAuthorized = data => ({
    type: SET_AUTHORIZED, data
})

export const userInfo = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTHORIZED:
			return { 
                ...state, 
                authorized: action.data
            }
		default:
			break
	}
	return state
}