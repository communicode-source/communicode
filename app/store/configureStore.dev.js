import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import DevTools from '../containers/DevTools';
import rootSaga from '../actions/sagas.js';
import logger from '../middleware/logger';
// import auth from '../middleware/auth';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware, logger),
            window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
