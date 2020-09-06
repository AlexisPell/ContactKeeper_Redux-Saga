import {
	GET_USERS_SUCCESS,
	DELETE_USER_SUCCESS,
	GET_USER,
	CLEAR_USER,
} from './../actions/users'

const initialState = {
	users: [],
	user: null,
}

export default (state = initialState, action) => {
	const { payload, type } = action

	switch (type) {
		case GET_USERS_SUCCESS:
			return {
				...state,
				users: payload.reverse(),
			}
		case DELETE_USER_SUCCESS:
			return {
				...state,
				users: state.users.filter((user) => user.id !== payload),
			}
		case GET_USER:
			return {
				...state,
				user: state.users.filter((user) => user.id === payload)[0],
			}
		case CLEAR_USER:
			return {
				...state,
				user: null,
			}
		default:
			return state
	}
}
