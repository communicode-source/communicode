import { takeEvery, takeLatest, put, call, select } from 'redux-saga/effects';
import { registerUser,
    decodeJWT,
    loginUser,
    updateName,
    returnAPIEmailForRecovery,
    searchUser,
    returnAPIHashForRecovery,
    returnPasswordToAPIForRecovery,
    getProfile,
    updateInterests } from '../api';
import { updateProjectStepOne,
    updateProject,
    updateUserSettings,
    updateUserSettingsSocials,
    updateUserSettingsSkills,
    getNonProfitProjects,
    updateProjectToBeComplete,
    createCharge,
    updateProjectToBeDeleted,
    createOrDestroyConnection,
    updateAvatarPhoto,
    updateCoverPhoto,
    getFeedForUser,
    makeDevMatchAPI,
    getCompleteProject,
    npMakedecision,
    finishVolunteerProject,
    getPaidForProject,
    unlinkStripeAccount,
    getEmailCodeForUnlinkingStripeAccount} from '../api';
import * as types from './types';

const getStateProjectData = (state) => state.newProject;
const getStateUserData = (state) => state.user;
const getRecoveryData = (state) => state.passwordRecovery;
const getState = (state) => { return {interests: state.interests, user: state.user.profile}; };
const getUserSettings = (state) => state.settings;
const getProfileState = (state) => state.profile;

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
        const user = yield call(decodeJWT, (action.data || localStorage.getItem('id_token')));

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
            types.GET_USER_PROFILE_FAILURE,
            'Sorry, could not find profile'
        );
    }
    catch(e) {
        yield put({
            type: types.GET_USER_PROFILE_FAILURE,
            error: e.message
        });
    }
}


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

export function* finishCreateProject(action) {
    try {
        const state = yield select(getStateUserData);
        const project = yield select(getStateProjectData);
        const charge = yield call(createCharge, {
            id: state.profile._id,
            token: action.data,
            email: state.profile.email,
            type: project.type,
            projectId: project.projectID
        });

        yield* handleServerResponse(
            charge,
            types.FINISH_REVIEW_PROJECT_SUCCESS,
            types.FINISH_REVIEW_PROJECT_FAILED,
            'Issue creating project'
        );
    }
    catch(e) {
        yield put({
            type: types.FINISH_REVIEW_PROJECT_FAILED,
            error: e
        });
    }
}

export function* updateUserAboutMeSettings() {
    try {
        const state = yield select(getUserSettings);
        const user = yield call(updateUserSettings, {
            settings: state,
        });
        localStorage.setItem('id_token', user.msg);
        yield* handleServerResponse(
            user,
            types.SUCCESS_IN_UPDATING_SETTINGS,
            types.FAILED_AT_UPDATING_SETTINGS,
            'Failed, sorry'
        );
    }
    catch(e) {
        yield put({
            type: types.UPDATING_SETTINGS_FAILED,
            error: e,
            notif: {classtype: 'error', msg: 'Failed to update About Section :(', time: 6}
        });
    }
}

export function* updateUserAboutMeSettingsLinks() {
    try {
        const state = yield select(getUserSettings);
        const user = yield call(updateUserSettingsSocials, {
            settings: state,
        });
        localStorage.setItem('id_token', user.msg);
        yield* handleServerResponse(
            user,
            types.SUCCESS_IN_UPDATING_SETTINGS,
            types.FAILED_AT_UPDATING_SETTINGS,
            'Failed, sorry'
        );
    }
    catch(e) {
        yield put({
            type: types.UPDATING_SETTINGS_FAILED,
            error: e,
            notif: {classtype: 'error', msg: 'Failed to update Social links :(', time: 6}
        });
    }
}

export function* updateUserAboutMeSettingsSkills() {
    try {
        const state = yield select(getUserSettings);
        const user = yield call(updateUserSettingsSkills, {
            settings: state,
        });
        localStorage.setItem('id_token', user.msg);
        yield* handleServerResponse(
            user,
            types.SUCCESS_IN_UPDATING_SETTINGS,
            types.FAILED_AT_UPDATING_SETTINGS,
            'Failed, sorry'
        );
    }
    catch(e) {
        yield put({
            type: types.UPDATING_SETTINGS_FAILED,
            error: e,
            notif: {classtype: 'error', msg: 'Failed to update skills :(', time: 2}
        });
    }
}

export function* getNPProjects() {
    try {
        const state = yield select(getProfileState);
        const projects = yield call(getNonProfitProjects, state._id);
        yield* handleServerResponse(
            projects,
            types.ATTACH_PROFILE_PROJECTS,
            'FAILED',
            'Failed, sorry!'
        );
    }
    catch(e) {
        yield put({
            type: 'FAILED'
        });
    }
}

export function* updateProjectById(action) {
    try {
        const update = yield call(updateProjectToBeComplete, action.id);
        yield* handleServerResponse(
            update,
            types.SUCCESS_MARKED_PROJECT_COMPLETE,
            types.FAILED_MARK_PROJECT_COMPLETE,
            'Failed, sorry!'
        );
    }
    catch(e) {
        yield put({
            type: 'Failed'
        });
    }
}

export function* deleteProjectForNP(action) {
    try {
        const update = yield call(updateProjectToBeDeleted, action.id);
        yield* handleServerResponse(
            update,
            types.SUCCESSFULLY_DELETED_NP_FROM_PROJECT,
            types.FAILED_TO_DELETE_NP_FROM_PROJECT,
            'Failed, sorry!'
        );
    }
    catch(e) {
        yield put({
            type: 'Failed'
        });
    }
}


export function* addOrRemoveFollower(action) {
    try {
        const update = yield call(createOrDestroyConnection, action.id);
        yield* handleServerResponse(
            update,
            types.SUCCEEDED_TO_CHANGE_FOLLOWING_STATUS,
            types.FAILED_TO_CHANGE_FOLLOWING_STATUS,
            'Failed, sorry!'
        );
    }
    catch(e) {
        yield put({
            type: types.FAILED_TO_CHANGE_FOLLOWING_STATUS
        });
    }
}

export function * addNotification(action) {
    if(!action.notif && !action.data) {
        return null;
    }
    yield put({
        type: types.ADD_NOTIF_TO_QUEUE,
        message: action.notif || action.data.notif
    });
    return null;
}

export function* uploadUserAvatarImage(action) {
    try {
        const state = yield select(getStateUserData);
        const update = yield call(updateAvatarPhoto, {file: action.file, id: state.profile._id});
        yield* handleServerResponse(
            update,
            types.AVATAR_UPLOAD_SUCCESS,
            types.AVATAR_UPLOAD_FAILED,
            'Failed, sorry!'
        );
    }
    catch(e) {
        yield put({
            type: types.AVATAR_UPLOAD_FAILED
        });
    }
}

export function* uploadUserCoverImage(action) {
    try {
        const state = yield select(getStateUserData);
        const update = yield call(updateCoverPhoto, {file: action.file, id: state.profile._id});
        yield* handleServerResponse(
            update,
            types.COVER_UPLOAD_SUCCESS,
            types.COVER_UPLOAD_FAILED,
            'Failed, sorry!'
        );
    }
    catch(e) {
        yield put({
            type: types.COVER_UPLOAD_FAILED
        });
    }
}

export function* loadUserSettingsToSettings() {
    const user = yield select(getStateUserData);
    yield put({type: types.UPDATE_USER_SETTINGS_TO_MATCH_PROFILE, data: {...user.profile}});
};

export function* loadUserIntoInterests() {
    const user = yield select(getStateUserData);

    yield put({type: types.UPDATE_INTERESTS_TO_MATCH_PROFILE, interests: [...user.profile.interests]});
};

export function* getUserFeed() {
    try {
        const state = yield select(getStateUserData);
        const feed = yield call(getFeedForUser, state.profile._id);
        yield* handleServerResponse(
            feed,
            types.GET_FEED_SUCCESS,
            types.GET_FEED_FAILURE,
            'Failed, sorry!'
        );
    }
    catch(e) {
        yield put({
            type: types.GET_FEED_FAILURE
        });
    }
}

export function* makeDevMatch(action) {
    const id = action.id;
    try {
        yield call(makeDevMatchAPI, id);
        yield put({
            type: types.MAKE_MATCH_SUCCESS,
            notif: {msg: 'Made request to work on this project!', time: 3, classtype: 'info'}
        });
    }
    catch(e) {
        yield put({
            type: types.MAKE_MATCH_FAILED,
            notif: {msg: 'Failed, maybe someone beat you to it, try again later!', time: 3, classtype: 'error'}
        });
    }
    yield put({
        type: types.REQUEST_FEED,
    });
}

export function* getProject(action) {
    const id = action.id;
    try {
        const state = yield select(getStateUserData);
        const feed = yield call(getCompleteProject, {id: state.profile._id, projectId: id});
        yield* handleServerResponse(
            feed,
            types.REQUEST_COMPLETED_PROJECT_SUCCESS,
            types.REQUEST_COMPLETED_PROJECT_FAILED,
            'Failed, sorry!'
        );
    }
    catch(e) {
        yield put({
            type: types.REQUEST_COMPLETED_PROJECT_FAILED
        });
    }
}

export function* makeMatchForNP(action) {
    const id = action.id;
    const decision = action.decision;
    try {
        yield call(npMakedecision, {id, decision});
        yield put({
            type: types.SUCCESSFUL_CHANGE_MATCH,
            notif: {msg: 'Success!', time: 3, classtype: 'info'}
        });
    }
    catch(e) {
        yield put({
            type: types.SUCCESSFUL_CHANGE_MATCH,
            notif: {msg: 'Error, try again in a few minutes', time: 4, classtype: 'error'}
        });
    }
}

export function* finishVolunteer() {
    try {
        const profile = yield select(getStateUserData);
        const project = yield select(getStateProjectData);
        yield call(finishVolunteerProject, { projectId: project.projectID});
        yield put({
            type: types.FINISH_VOLUNTEER_PROJECT,
            data: {msg: {url: profile.profile.url}}
        });
    }
    catch(e) {
        yield put({
            type: types.FINISH_REVIEW_PROJECT_FAILED
        });
    }
}

export function* getPaid(action) {
    try {
        yield call(getPaidForProject, {id: action.id});
        yield put({
            type: types.REQUEST_COMPLETED_PROJECT_PAYMENT_SUCCESS,
            notif: {msg: 'Successful payout, you should see the result within the next day or two', time: 5, classtype: 'info'},
            id: action.id
        });
    }
    catch(e) {
        yield put({
            type: types.REQUEST_COMPLETED_PROJECT_PAYMENT_FAIL,
            notif: {msg: 'Something went wrong, try again later or contact us at contact@communicode.co', time: 5, classtype: 'error'}
        });
    }
}

function* getEmailForStripeUnlink() {
    try {
        yield call(getEmailCodeForUnlinkingStripeAccount);
        yield put({
            type: types.RECEIVE_API_CONFIRMATION_OF_EMAIL,
            notif: {msg: 'Check your email!', time: 10, classtype: 'info'}
        });
    }
    catch(e) {
        yield put({
            type: types.RECEIVE_API_CONFIRMATION_OF_FAILURE,
            notif: {msg: e.message, time: 7, classtype: 'error'}
        });
    }
}

function* submitCodeForUnlinking(action) {
    try {
        yield call(unlinkStripeAccount, {code: action.code});
        yield put({
            type: types.SUCCESSFULLY_UNLINKED_STRIPE_ACCOUNT,
            notif: {msg: 'Check your email!', time: 10, classtype: 'info'}
        });
    }
    catch(e) {
        yield put({
            type: types.UNSUCCESSFULLY_UNLINKED_STRIPE_ACCOUNT,
            notif: {msg: e.message, time: 7, classtype: 'error'}
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
    yield takeLatest(types.INITIAL_INTERESTS_LOAD, loadUserIntoInterests);
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
    yield takeLatest(types.START_PROFILE_NP_PROJECTS_LOAD, getNPProjects);
    yield takeLatest(types.CHECK_OFF_PROFILE_PROJECT, updateProjectById);
    yield takeEvery(types.SUCCESS_MARKED_PROJECT_COMPLETE, getNPProjects);
    yield takeEvery(types.SUCCESSFUL_CHANGE_MATCH, getNPProjects);
    yield takeEvery(types.SUCCESSFULLY_DELETED_NP_FROM_PROJECT, getNPProjects);
    yield takeEvery(types.BUTTON_CLICK_TO_DELETE_PROJECT, deleteProjectForNP);
    yield takeEvery(types.BUTTON_CLICK_TO_CHANGE_FOLLOWING_STATUS, addOrRemoveFollower);
    yield takeEvery(types.NONPROFIT_SELECT_DEVELOPER, makeMatchForNP);
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

function* watchFinishProjectCreation() {
    yield takeEvery(types.FINISH_REVIEW_PROJECT_BUTTON_PRESS, finishCreateProject);
    yield takeEvery(types.FINISH_REVIEW_VOLUNTEER_BUTTON_PRESS, finishVolunteer);
}

function* watchForUpdatingUserSettings() {
    yield takeLatest(types.TYPING_IN_SETTINGS_UPDATE_ABOUT_ME_CLICK, updateUserAboutMeSettings);
    yield takeLatest(types.TYPING_IN_SETTINGS_UPDATE_SOCIALS_CLICK, updateUserAboutMeSettingsLinks);
    yield takeEvery(types.LOAD_SKILLS_INTO_DB, updateUserAboutMeSettingsSkills);
    yield takeLatest(types.LOADING_USER_INFO_INTO_THE_SETTINGS, loadUserSettingsToSettings);
    yield takeLatest(types.UPLOAD_AVATAR_IMAGE, uploadUserAvatarImage);
    yield takeLatest(types.UPLOAD_COVER_IMAGE, uploadUserCoverImage);
    yield takeLatest(types.UNLINK_STRIPE_ACCOUNT_BUTTON_CLICK, getEmailForStripeUnlink);
    yield takeLatest(types.CHECK_UNLINK_CODE, submitCodeForUnlinking);
}

function* watchForTypesThatChangeTheUser() {
    yield takeLatest(types.SUCCESS_IN_UPDATING_SETTINGS, getLoggedInUser);
    yield takeEvery(types.SUCCESSFULLY_UNLINKED_STRIPE_ACCOUNT, getLoggedInUser);
}

function* watchForNotifs() {
    yield takeEvery(types.SUCCESS_IN_UPDATING_SETTINGS, addNotification);
    yield takeEvery(types.UPDATING_SETTINGS_FAILED, addNotification);
    yield takeEvery(types.MAKE_MATCH_FAILED, addNotification);
    yield takeEvery(types.UNSUCCESSFULLY_UNLINKED_STRIPE_ACCOUNT, addNotification);
    yield takeEvery(types.SUCCESSFULLY_UNLINKED_STRIPE_ACCOUNT, addNotification);
    yield takeEvery(types.RECEIVE_API_CONFIRMATION_OF_FAILURE, addNotification);
    yield takeEvery(types.RECEIVE_API_CONFIRMATION_OF_EMAIL, addNotification);
    yield takeEvery(types.REQUEST_COMPLETED_PROJECT_PAYMENT_FAIL, addNotification);
    yield takeEvery(types.REQUEST_COMPLETED_PROJECT_PAYMENT_SUCCESS, addNotification);
}

function* watchFeed() {
    yield takeLatest(types.REQUEST_FEED, getUserFeed);
    yield takeLatest(types.MAKE_MATCH, makeDevMatch);
}

function* watchComplete() {
    yield takeLatest(types.REQUEST_COMPLETED_PROJECT, getProject);
    yield takeLatest(types.REQUEST_COMPLETED_PROJECT_PAYMENT_SUCCESS, getProject);
    yield takeLatest(types.REQUEST_COMPLETED_PROJECT_PAYMENT, getPaid);
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
        watchCreateNewProjectStep4(),
        watchFinishProjectCreation(),
        watchForUpdatingUserSettings(),
        watchForTypesThatChangeTheUser(),
        watchForNotifs(),
        watchFeed(),
        watchComplete()
    ];
}
