import * as types from './../actions/types';

const notifier = (state = {
    messages: []
}, action) => {
    const current = [...state.messages];
    switch(action.type) {
        case types.ADD_NOTIF_TO_QUEUE:
            current.push(action.message);
            return {messages: current};
        case types.REMOVE_CURRENT_FROM_QUEUE:
            current.shift();
            return {messages: current};
        default:
            return state;
    }
};

export default notifier;
