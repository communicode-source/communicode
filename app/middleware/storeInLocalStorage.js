export default (state) => {
    if(!localStorage || !state.user.profile) { return false; }
    try {
        localStorage.setItem('profile', JSON.stringify(state.user.profile));
        return true;
    }
    catch(e) {
        return false;
    }
};
