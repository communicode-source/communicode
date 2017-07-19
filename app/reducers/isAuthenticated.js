const isAuthenticated = (state) => {
    return (localStorage.getItem('id_token') === null) ? false : true;
};

export default isAuthenticated;
