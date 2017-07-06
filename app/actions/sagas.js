import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { mailchimpSignUp } from '../api';
import * as types from './types';


function* handleServerResponse(data, success, failed, errorMsg, additional = {}) {
    if(data) {
        yield put(Object.assign({}, { type: success, data }, additional));
    }
    else {
        yield put({ type: failed, error: errorMsg });
    }
}

export function* userLocalRegister(action) {
    try {
        const user = yield call(localRegister, action.data);

        yield* handleServerResponse(
          user,
          types.ADD_LOCAL_USER_SUCCESS,
          types.ADD_LOCAL_USER_FAILED,
          'NETWORK ERROR: User couldn\'t create'
        );
    }
    catch(e) {
        yield put({
            type: types.ADD_LOCAL_USER_FAILED,
            error: e
        });
    }
}

function* watchLocalRegister() {
    yield* takeEvery(types.LOCAL_REGISTER_CLICK, userLocalRegister);
}

// single entry point to start all sagas at once
export default function* rootSaga() {
    yield [
        watchLocalRegister()
    ];
}
