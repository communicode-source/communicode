/* eslint no-console: 0 */ // Since the purpose of this file is logging, disable the warning. Also consider switching

const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);

    return result;
};

export default logger;
