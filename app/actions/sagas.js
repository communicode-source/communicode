import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { registerUser, decodeJWT, loginUser } from '../api';
import * as types from './types';


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
    console.log(action);
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

export default function* rootSaga() {
    yield [
        watchRegisterNewUser(),
        watchRegisterGoogleUser(),
        watchRegisterFacebookUser(),
        watchLocalLoginUser(),
        watchGoogleLoginUser(),
        watchFacebookLoginUser(),
        watchGetLoggedInUser()
    ];
}
