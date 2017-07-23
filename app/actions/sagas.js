import { takeEvery, takeLatest, put, call, select } from 'redux-saga/effects';
import { registerUser, decodeJWT, loginUser, updateName, returnAPIEmailForRecovery, searchUser, returnAPIHashForRecovery, returnPasswordToAPIForRecovery, getProfile, updateInterests } from '../api';
import { updateProjectStepOne, updateProject } from '../api';
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

const getStateUserData = (state) => state.user;

export function* updateFirstAndLastName() {
    try {
        const state = yield select(getStateUserData);
        const user = yield call(updateName, {fname: state.fname, lname: state.lname, organizationname: state.orgname, user: state});

        yield* handleServerResponse(
            user,
            types.UPDATE_NAME_SUCCESS,
            types.UPDATE_NAME_FAILED,
            'Sorry, could not update your name.'
        );
    }
    catch(e) {
        yield put({
            type: types.UPDATE_NAME_FAILED,
            error: e
        });
    }
}
const getRecoveryData = (state) => state.passwordRecovery;

export function* sendEmailAndGetHash() {
    try {
        const data = yield select(getRecoveryData);
        const response = yield call(returnAPIEmailForRecovery, data.email);
        yield* handleServerResponse(
            (response.err === true) ? undefined : response.hash,
            types.RECOVERY_EMAIL_SUCCESS,
            types.RECOVERY_EMAIL_FAILURE,
            response.error
        );
    }
    catch(e) {
        yield put({
            type: types.RECOVERY_EMAIL_FAILURE,
            error: e
        });
    }
}

export function* sendHashesAndGetToken() {
    try {
        const data = yield select(getRecoveryData);
        const response = yield call(returnAPIHashForRecovery, data.url, data.hash);
        yield* handleServerResponse(
            (response.err === true) ? undefined : response.jwt,
            types.SUBMITTED_HASHES_FOR_RECOVERED_PASSWORD_SUCCESS,
            types.SUBMITTED_HASHES_FOR_RECOVERED_PASSWORD_FAILED,
            response.error
        );
    }
    catch(e) {
        yield put({
            type: types.RECOVERY_EMAIL_FAILURE,
            error: e
        });
    }
}

export function* sendPasswordForUpdateRecovery() {
    try {
        const data = yield select(getRecoveryData);
        const response = yield call(returnPasswordToAPIForRecovery, data.jwt, data.password);
        yield* handleServerResponse(
            (response.err === true) ? undefined : response.msg,
            types.RECOVERY_PASSWORD_SUCCESS,
            types.RECOVERY_PASSWORD_FAILED,
            response.error
        );
    }
    catch(e) {
        yield put({
            type: types.RECOVERY_EMAIL_FAILURE,
            error: e
        });
    }
}

export function* getUserProfile(action) {
    try {
        const user = yield call(getProfile, action.data);

        yield* handleServerResponse(
            user,
            types.GET_USER_PROFILE_SUCCESS,
            types.GET_USER_PROFILE_FAILED,
            'Sorry, could not find profile'
        );
    }
    catch(e) {
        yield put({
            type: types.GET_USER_PROFILE_FAILED,
            error: e
        });
    }
}

const getState = (state) => { return {interests: state.interests, user: state.user.profile}; };

export function* updateUserInterests() {
    try {
        const data = yield select(getState);
        const user = yield call(updateInterests, data);

        yield* handleServerResponse(
            user,
            types.UPDATE_INTERESTS_SUCCESS,
            types.UPDATE_INTERESTS_FAILED,
            'Could not update interests'
        );
    }
    catch(e) {
        yield put({
            type: types.UPDATE_INTERESTS_FAILED,
            error: e
        });
    }
}

export function* addNewPortfolioProject() {
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

const getStateProjectData = (state) => state.newProject;

export function* createNewProjectStep1() {
    try {
        const state = yield select(getStateUserData);
        const stateProject = yield select(getStateProjectData);
        const project = yield call(updateProjectStepOne, {_id: state.profile._id, item: stateProject.item, user: state.profile});

        yield* handleServerResponse(
            project,
            types.STEP_ONE_API_RECEIVED_SUCCESS,
            types.STEP_ONE_API_RECEIVED_FAILED,
            'Issue creating project'
        );
    }
    catch(e) {
        yield put({
            type: types.STEP_ONE_API_RECEIVED_FAILED,
            error: e
        });
    }
}

export function* createNewProjectStep2() {
    try {
        const state = yield select(getStateProjectData);
        const project = yield call(updateProject, {
            id: state.projectID,
            project: {
                title: state.title,
                type: state.type,
                description: state.description
            }
        });

        yield* handleServerResponse(
            project,
            types.STEP_TWO_API_RECEIVED_SUCCESS,
            types.STEP_TWO_API_RECEIVED_FAILED,
            'Issue creating project'
        );
    }
    catch(e) {
        yield put({
            type: types.STEP_TWO_API_RECEIVED_FAILED,
            error: e
        });
    }
}

export function* createNewProjectStep3() {
    try {
        const state = yield select(getStateProjectData);
        const project = yield call(updateProject, {
            id: state.projectID,
            project: {
                startTime: state.start,
                endTime: state.end,
                interests: state.interestArea
            }
        });

        yield* handleServerResponse(
            project,
            types.STEP_THREE_API_RECEIVED_SUCCESS,
            types.STEP_THREE_API_RECEIVED_FAILED,
            'Issue creating project'
        );
    }
    catch(e) {
        yield put({
            type: types.STEP_THREE_API_RECEIVED_FAILED,
            error: e
        });
    }
}

export function* createNewProjectStep4() {
    try {
        const state = yield select(getStateProjectData);
        const project = yield call(updateProject, {
            id: state.projectID,
            project: {
                skills: state.skills
            }
        });

        yield* handleServerResponse(
            project,
            types.STEP_FOUR_API_RECEIVED_SUCCESS,
            types.STEP_FOUR_API_RECEIVED_FAILED,
            'Issue creating project'
        );
    }
    catch(e) {
        yield put({
            type: types.STEP_FOUR_API_RECEIVED_FAILED,
            error: e
        });
    }
}


function* watchRegisterNewUser() {
    yield takeEvery(types.LOCAL_REGISTER_CLICK, registerNewUser);
}

function* watchRegisterGoogleUser() {
    yield takeEvery(types.GOOGLE_REGISTER_CLICK, registerGoogleUser);
}

function* watchRegisterFacebookUser() {
    yield takeEvery(types.FACEBOOK_REGISTER_CLICK, registerFacebookUser);
}

function* watchLocalLoginUser() {
    yield takeEvery(types.LOCAL_LOGIN_CLICK, loginLocalUser);
}

function* watchGoogleLoginUser() {
    yield takeEvery(types.GOOGLE_LOGIN_CLICK, loginGoogleUser);
}

function* watchFacebookLoginUser() {
    yield takeEvery(types.FACEBOOK_LOGIN_CLICK, loginFacebookUser);
}

function* watchGetLoggedInUser() {
    yield takeEvery(types.GET_LOGGED_IN_LOCAL_STORAGE, getLoggedInUser);
}

function* watchUpdateName() {
    yield takeEvery(types.UPDATE_NAME_CLICK, updateFirstAndLastName);
}

function* watchUpdateInterests() {
    yield takeEvery(types.UPDATE_INTERESTS_CLICK, updateUserInterests);
}

function* watchRecoverEmailSubmition() {
    yield takeLatest(types.SUBMIT_RECOVERY_EMAIL, sendEmailAndGetHash);
}
function* watchRecoverHashSubmition() {
    yield takeLatest(types.SUBMIT_HASHES_FOR_JWT, sendHashesAndGetToken);
}
function* watchRecoverPasswordSubmition() {
    yield takeLatest(types.SUBMIT_NEW_PASSWORD, sendPasswordForUpdateRecovery);
}

function* watchSearchChange() {
    yield takeEvery(types.SEARCH_INPUT_CHANGE, getSearch);
}

function* watchFetchUserProfile() {
    yield takeEvery(types.GET_USER_PROFILE_FETCH, getUserProfile);
}

function* watchCreateNewPortfolioProject() {
    yield takeEvery(types.CREATE_PORTFOLIO_PROJECT_CLICK, addNewPortfolioProject);
}

function* watchCreateNewProjectStep1() {
    yield takeEvery(types.STEP_2_NEW_PROJECT_BUTTON_PRESS, createNewProjectStep1);
}

function* watchCreateNewProjectStep2() {
    yield takeEvery(types.STEP_3_NEW_PROJECT_BUTTON_PRESS, createNewProjectStep2);
}

function* watchCreateNewProjectStep3() {
    yield takeEvery(types.STEP_4_NEW_PROJECT_BUTTON_PRESS, createNewProjectStep3);
}

function* watchCreateNewProjectStep4() {
    yield takeEvery(types.FINISH_PROJECT_BUTTON_PRESS, createNewProjectStep4);
}

export default function* rootSaga() {
    yield [
        watchRegisterNewUser(),
        watchRegisterGoogleUser(),
        watchRegisterFacebookUser(),
        watchLocalLoginUser(),
        watchGoogleLoginUser(),
        watchFacebookLoginUser(),
        watchGetLoggedInUser(),
        watchUpdateName(),
        watchRecoverEmailSubmition(),
        watchRecoverHashSubmition(),
        watchRecoverPasswordSubmition(),
        watchSearchChange(),
        watchFetchUserProfile(),
        watchCreateNewPortfolioProject(),
        watchUpdateInterests(),
        watchCreateNewProjectStep1(),
        watchCreateNewProjectStep2(),
        watchCreateNewProjectStep3(),
        watchCreateNewProjectStep4()
    ];
}
