import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { registerUser, getProjectFeed } from '../api';
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

export function* requestProjectFeed(action) {
    try {
        const feed = yield call(getProjectFeed, action.data);

        yield* handleServerResponse(
            feed,
            types.GET_FEED_SUCCESS,
            types.GET_FEED_FAILURE,
            "Couldn't fetch feed :("
        );
    }
    catch(e) {
        yield put({
            type: types.GET_FEED_FAILURE,
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

function* watchGetProjectFeed() {
    yield* takeEvery(types.REQUEST_FEED, requestProjectFeed);
}

export default function* rootSaga() {
    yield [
        watchRegisterNewUser(),
        watchRegisterGoogleUser(),
        watchGetProjectFeed()
    ];
}
