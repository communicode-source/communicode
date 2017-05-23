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

        return responseData;
    }
    catch(e) {
        throw e;
    }
}

export async function getProjectFeed() {
    try {
        const options = { mode: 'cors', method: 'GET' };
        const response = await fetch(API_URL + '/projects', options);

        return await response.json();
    }
    catch(e) {
        throw e;
    }
}
