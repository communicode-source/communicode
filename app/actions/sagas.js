import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { registerUser, decodeJWT, loginUser, updateName, searchUser } from '../api';
import * as types from './types';

import { browserHistory } from 'react-router';


function* handleServerResponse(data, success, failed, errorMsg, additional = {}) {
    if(data) {
        yield put(Object.assign({}, { type: success, data}, additional));
    }
    else {
        yield put({ type: failed, error: errorMsg });
    }
}

export function* registerNewUser(action) {
    try {
        const user = yield call(registerUser, action.data);

        yield* handleServerResponse(
            user,
            types.ADD_LOCAL_USER_SUCCESS,
            types.ADD_LOCAL_USER_FAILED,
            'Sorry, Could not create user :('
        );
    }
    catch(e) {
        yield put({
            type: types.ADD_LOCAL_USER_FAILED,
            error: e
        });
    }
}

export function* registerGoogleUser(action) {
    try {
        const user = yield call(registerUser, action.data);

        yield* handleServerResponse(
            user,
            types.ADD_GOOGLE_USER_SUCCESS,
            types.ADD_GOOGLE_USER_FAILED,
            'Sorry, Could not create user :('
        );
    }
    catch(e) {
        yield put({
            type: types.ADD_GOOGLE_USER_FAILED,
            error: e
        });
    }
}

export function* registerFacebookUser(action) {
    try {
        const user = yield call(registerUser, action.data);

        yield* handleServerResponse(
            user,
            types.ADD_FACEBOOK_USER_SUCCESS,
            types.ADD_FACEBOOK_USER_FAILED,
            'Sorry, Could not create user :('
        );
    }
    catch(e) {
        yield put({
            type: types.ADD_FACEBOOK_USER_FAILED,
            error: e
        });
    }
}

export function* loginLocalUser(action) {
    try {
        const user = yield call(loginUser, action.data);

        yield* handleServerResponse(
            user,
            types.LOCAL_LOGIN_SUCCESS,
            types.LOCAL_LOGIN_FAILED,
            'Sorry, Login Went wrong.'
        );
    }
    catch(e) {
        yield put({
            type: types.LOCAL_LOGIN_FAILED,
            error: e
        });
    }
}

export function* loginGoogleUser(action) {
    try {
        const user = yield call(loginUser, action.data);

        yield* handleServerResponse(
            user,
            types.GOOGLE_LOGIN_SUCCESS,
            types.GOOGLE_LOGIN_FAILED,
            'Sorry, Login Went wrong.'
        );
    }
    catch(e) {
        yield put({
            type: types.GOOGLE_LOGIN_FAILED,
            error: e
        });
    }
}

export function* loginFacebookUser(action) {
    try {
        const user = yield call(loginUser, action.data);

        yield* handleServerResponse(
            user,
            types.FACEBOOK_LOGIN_SUCCESS,
            types.FACEBOOK_LOGIN_FAILED,
            'Sorry, Login Went wrong.'
        );
    }
    catch(e) {
        yield put({
            type: types.FACEBOOK_LOGIN_FAILED,
            error: e
        });
    }
}

export function* getLoggedInUser(action) {
    try {
        const user = yield call(decodeJWT, action.data);

        yield* handleServerResponse(
            user,
            types.GET_LOGGED_IN_LOCAL_STORAGE_SUCCESS,
            types.GET_LOGGED_IN_LOCAL_STORAGE_FAILED,
            'Sorry, could not find you.'
        );
    }
    catch(e) {
        yield put({
            type: types.GET_LOGGED_IN_LOCAL_STORAGE_FAILED,
            error: e
        });
    }
}

export function* redirectRegisteredUser() {
    browserHistory.push('/interests');
}

export function* updateFirstAndLastName(action) {
    try {
        const user = yield call(updateName, action.data);

        yield* handleServerResponse(
            user,
            types.UPDATE_NAME_SUCCESS,
            types.UPDATE_NAME_FAILED,
            'Sorry, could not update your name.s'
        );
    }
    catch(e) {
        yield put({
            type: types.UPDATE_NAME_FAILED,
            error: e
        });
    }
}

export function* getSearch(input) {
    if (input.data.length < 3) {
        yield put({
            type: types.SEARCH_INPUT_FAILED,
            error: 'Type more letters'
        });
    }
    else {
        try {
            const newInput = input.data.replace(/ +/, '_');
            const search = yield call(searchUser, newInput);

            yield* handleServerResponse(
                search,
                types.SEARCH_INPUT_SUCCESS,
                types.SEARCH_INPUT_FAILED,
                'Sorry, couldn\'t find the user'
	    );
        }
        catch(e) {
            yield put({
                type: types.SEARCH_INPUT_FAILED,
                error: e
            });
        }
    }
}

function* watchRegisterNewUser() {
    yield* takeEvery(types.LOCAL_REGISTER_CLICK, registerNewUser);
}

function* watchRegisterGoogleUser() {
    yield* takeEvery(types.GOOGLE_REGISTER_CLICK, registerGoogleUser);
}

function* watchRegisterFacebookUser() {
    yield* takeEvery(types.FACEBOOK_REGISTER_CLICK, registerFacebookUser);
}

function* watchLocalLoginUser() {
    yield* takeEvery(types.LOCAL_LOGIN_CLICK, loginLocalUser);
}

function* watchGoogleLoginUser() {
    yield* takeEvery(types.GOOGLE_LOGIN_CLICK, loginGoogleUser);
}

function* watchFacebookLoginUser() {
    yield* takeEvery(types.FACEBOOK_LOGIN_CLICK, loginFacebookUser);
}

function* watchGetLoggedInUser() {
    yield* takeEvery(types.GET_LOGGED_IN_LOCAL_STORAGE, getLoggedInUser);
}

function* watchRegisterLocalSuccess() {
    yield* takeEvery(types.ADD_LOCAL_USER_SUCCESS, redirectRegisteredUser);
}

function* watchRegisterFacebookSuccess() {
    yield* takeEvery(types.ADD_FACEBOOK_USER_SUCCESS, redirectRegisteredUser);
}

function* watchRegisterGoogleSuccess() {
    yield* takeEvery(types.ADD_GOOGLE_USER_SUCCESS, redirectRegisteredUser);
}

function* watchUpdateName() {
    yield* takeEvery(types.UPDATE_NAME_CLICK, redirectRegisteredUser);
}

function* watchSearchChange() {
    yield* takeEvery(types.SEARCH_INPUT_CHANGE, getSearch);
}

export default function* rootSaga() {
    yield [
        watchRegisterNewUser(),
        watchRegisterGoogleUser(),
        watchRegisterFacebookUser(),
        watchRegisterLocalSuccess(),
        watchRegisterGoogleSuccess(),
        watchRegisterFacebookSuccess(),
        watchLocalLoginUser(),
        watchGoogleLoginUser(),
        watchFacebookLoginUser(),
        watchGetLoggedInUser(),
        watchUpdateName(),
        watchSearchChange()
    ];
}
