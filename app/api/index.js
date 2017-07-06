import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:3000';
const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export async function registerUser(user) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify(user)
        };
        const response = await fetch(API_URL + '/verify/create', options);

        const responseData = await response.json();


        if(responseData === 100) {
            throw new Error('User already exists!');
        }
        else if(responseData === 102) {
            throw new Error('Problem creating user.');
        }
        else if(!responseData.msg) {
            throw new Error('Problem fetching JWT');
        }

        // Save the JWT into local storage
        createLocalStorageToken(responseData.msg);

        const profile = decodeJWT(true);

        return profile;
    }
    catch(e) {
        throw e;
    }
}

export async function loginUser(data) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify(data)
        };
        const response = await fetch(API_URL + '/verify/login', options);

        const responseData = await response.json();

        if(responseData === 100) {
            throw new Error('User not found');
        }

        if(responseData === 101 ) {
            throw new Error('User not found.');
        }

        // Save the JWT into local Storage
        createLocalStorageToken(responseData.msg);

        const profile = decodeJWT(true);

        return profile;
    }
    catch(e) {
        throw e;
    }
}

export async function decodeJWT(isAuthenticated) {
    try {
        let jwt = '';
        if(isAuthenticated) {
            jwt = getLocalStorage('id_token');
        }

        const options = {
            mode: 'cors',
            method: 'GET'
        };

        const response = await fetch(API_URL + '/jwt/decode/' + jwt, options);

        return response.json();
    }
    catch(e) {
        throw e;
    }
}

export async function updateName(data) {
    try {
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: jsonHeaders,
            body: JSON.stringify(data)
        };

        const response = await fetch(API_URL + '/user/update/name/' + data.user.profile._id, options);
        const responseData = await response.json();

        if(responseData === 100) {
            throw new Error('Error updating name.');
        }
        else if(!responseData.msg) {
            throw new Error('Error updating name.');
        }

        createLocalStorageToken(responseData.msg);

        const profile = decodeJWT(true);

        return profile;
    }
    catch(e) {
        throw e;
    }
}

export async function searchUser(name) {
    try {
        const options = {
            mode: 'cors',
            method: 'GET'
        };

        const response = await fetch(API_URL + '/search/' + name, options);

        return response.json();
    }
    catch(e) {
        throw e;
    }
}

function createLocalStorageToken(token) {
    localStorage.setItem('id_token', token);
}

function getLocalStorage(key) {
    return localStorage.getItem(key);
}
