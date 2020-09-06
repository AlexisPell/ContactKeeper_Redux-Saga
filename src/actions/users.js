export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USER = 'GET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const ADD_USER_REQUEST = 'ADD_USER_REQUEST'
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'

export const getUsers = () => ({ type: GET_USERS_REQUEST })

export const getUsersSuccess = (users) => ({
	type: GET_USERS_SUCCESS,
	payload: users,
})

export const getUser = (id) => ({ type: GET_USER, payload: id })

export const addUser = (form) => ({ type: ADD_USER_REQUEST, payload: form })

export const updateUser = (form) => ({
	type: UPDATE_USER_REQUEST,
	payload: form,
})

export const deleteUser = (id) => ({ type: DELETE_USER_REQUEST, payload: id })

export const deleteUserSuccess = (id) => ({
	type: DELETE_USER_SUCCESS,
	payload: id,
})

export const clearUser = () => ({ type: CLEAR_USER })
