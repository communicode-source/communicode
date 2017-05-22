import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { registerUser } from '../api';
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

function* watchRegisterNewUser() {
    yield* takeEvery(types.LOCAL_REGISTER_CLICK, registerNewUser);
}

function* watchRegisterGoogleUser() {
    yield* takeEvery(types.GOOGLE_REGISTER_CLICK, registerNewUser);
}

export default function* rootSaga() {
    yield [
        watchRegisterNewUser(),
        watchRegisterGoogleUser()
    ];
}
