import { takeEvery, takeLatest, put, call, fork } from 'redux-saga/effects'
import * as actions from './../actions/users'
import * as api from './../api/users'

// watchFunction - track the actions
// workerFunction - makes some changes
// takeEvery - track the action (TYPE, actionHandler())
// put - dispatch to reducer
// call - takes func and returns data output
// select(state => state.users) - get access to store

function* getUsers() {
	const res = yield call(api.fetchUsers)
	yield put(actions.getUsersSuccess(res))
}

function* watchGetUsers() {
	yield takeEvery(actions.GET_USERS_REQUEST, getUsers)
}

function* addUser({ payload }) {
	yield call(api.addUser, payload)
	yield call(getUsers)
}

function* watchAddUser() {
	yield takeLatest(actions.ADD_USER_REQUEST, addUser)
}

function* updateUser({ payload }) {
	yield call(api.updateUser, payload)
	yield call(getUsers)
}

function* watchUpdateUser() {
	yield takeLatest(actions.UPDATE_USER_REQUEST, updateUser)
}

function* deleteUser({ payload }) {
	yield call(api.deleteUser, payload)
	yield put(actions.deleteUserSuccess(payload))
}

function* watchDeleteUser() {
	yield takeLatest(actions.DELETE_USER_REQUEST, deleteUser)
}

const userSagas = [
	fork(watchGetUsers),
	fork(watchAddUser),
	fork(watchUpdateUser),
	fork(watchDeleteUser),
]

export default userSagas
