import * as types from './../actions/types';

const notifier = (state = {
    messages: [
        {msg: 'Testing an error notif, remove me from the notifier reducer', time: 5, classtype: 'error'},
        {msg: 'Testing an informative notif, that persists until you click the X', time: 0, classtype: 'info'},
    ]
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
