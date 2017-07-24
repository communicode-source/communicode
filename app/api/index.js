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
            method: 'GET',
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
            body: JSON.stringify({...data, token: localStorage.getItem('id_token')})
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

export async function updateInterests(data) {
    try {
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: jsonHeaders,
            body: JSON.stringify({...data, token: localStorage.getItem('id_token')})
        };

        const response = await fetch(API_URL + '/user/update/interests/' + data.user._id, options);
        const responseData = await response.json();

        if(responseData === 100) {
            throw new Error('Error updating interests.');
        }
        else if(!responseData.msg) {
            throw new Error('Error updating interests.');
        }

        createLocalStorageToken(responseData.msg);

        const profile = decodeJWT(true);

        return profile;
    }
    catch(e) {
        throw e;
    }
}

export async function getProfile(url) {
    try {
        const options = {
            mode: 'cors',
            method: 'GET'
        };

        const response = await fetch(API_URL + '/user/profile/' + url, options);

        return await response.json();
    }
    catch(e) {
        throw e;
    }
}


export async function returnAPIEmailForRecovery(email) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify({email: email})
        };
        const response = await fetch(API_URL + '/recover/generate', options);

        const responseData = await response.json();
        if(responseData === '600') {
            throw new Error('Invalid email');
        }
        else if(responseData === '605') {
            throw new Error('You have already requested a password change!');
        }
        else if(responseData.err !== false) {
            throw new Error('Server error, try again later');
        }
        else if(!responseData.hash) {
            throw new Error('There was a problem!');
        }

        return {err: false, hash: responseData.hash};
    }
    catch(e) {
        return {err: true, error: e.message};
    }
}

export async function returnAPIHashForRecovery(url, user) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify({urlHash: url, hash: user})
        };
        const response = await fetch(API_URL + '/recover/verify', options);

        const responseData = await response.json();
        if(responseData === '601') {
            throw new Error('Recheck your emailed code!');
        }
        else if(responseData.err !== false) {
            throw new Error('Server error, try again later');
        }
        else if(!responseData.msg) {
            throw new Error('There was a problem!');
        }

        return {err: false, jwt: responseData.msg};
    }
    catch(e) {
        return {err: true, error: e.message};
    }
}

export async function returnPasswordToAPIForRecovery(jwt, password) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify({jwt, password})
        };
        const response = await fetch(API_URL + '/recover/change', options);

        const responseData = await response.json();
        if(responseData === '610') {
            throw new Error('You are not authorized to do that');
        }
        else if(responseData === '611') {
            throw new Error('You\'ve already changed your password!');
        }
        else if(responseData === '612') {
            throw new Error('No account with that email');
        }
        else if(responseData.err !== false) {
            throw new Error('Server error, try again later');
        }
        else if(!responseData.msg || responseData.msg !== 'Success') {
            throw new Error('There was a problem!');
        }

        return {err: false, msg: 'Successfully updated your password!'};
    }
    catch(e) {
        return {err: true, error: e.message};
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

export async function updateProjectStepOne(project) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify({...project, token: localStorage.getItem('id_token')})
        };

        const response = await fetch(API_URL + '/projects', options);
        const responseData = await response.json();

        if(responseData === 100) {
            throw new Error('Error Creating a New Project');
        }
        else if(!responseData.msg) {
            throw new Error('Error Creating a New Project');
        }

        createLocalStorageToken(responseData.msg);

        return responseData._id;
    }
    catch(e) {
        throw e;
    }
}

export async function updateProject(project) {
    try {
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: jsonHeaders,
            body: JSON.stringify({...project, token: localStorage.getItem('id_token')})
        };

        const response = await fetch(API_URL + '/projects/update/' + project.id, options);
        const responseData = await response.json();

        if(responseData === 100) {
            throw new Error('Error Creating a New Project');
        }
        else if(!responseData.msg) {
            throw new Error('Error Creating a New Project');
        }

        createLocalStorageToken(responseData.msg);

        return responseData;
    }
    catch(e) {
        throw e;
    }
}

export async function updateUserSettings(settings) {
    try {
        const sending = {...settings};
        sending.settings.skills = null;
        sending.settings.interests = null;
        sending.settings.socials = null;
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: jsonHeaders,
            body: JSON.stringify({...sending, token: localStorage.getItem('id_token')})
        };

        const response = await fetch(API_URL + '/user/update', options);
        const responseData = await response.json();
        if(responseData.err === true) {
            throw new Error('Something went wrong');
        }
        return responseData;
    }
    catch(e) {
        throw e;
    }
}

export async function updateUserSettingsSocials(settings) {
    try {
        const sending = {...settings};
        const socials = {facebook: sending.settings.facebook, github: sending.settings.github, linkedin: sending.settings.linkedin, twitter: sending.settings.twitter};
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: jsonHeaders,
            body: JSON.stringify({settings: {socials}, token: localStorage.getItem('id_token')})
        };
        const response = await fetch(API_URL + '/user/update', options);
        const responseData = await response.json();
        if(responseData.err === true) {
            throw new Error('Something went wrong');
        }
        return responseData;
    }
    catch(e) {
        throw e;
    }
}

export async function updateUserSettingsSkills(settings) {
    try {
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: jsonHeaders,
            body: JSON.stringify({settings: {skills: settings.settings.skills}, token: localStorage.getItem('id_token')})
        };
        const response = await fetch(API_URL + '/user/update', options);
        const responseData = await response.json();
        if(responseData.err === true) {
            throw new Error('Something went wrong');
        }
        return responseData;
    }
    catch(e) {
        throw e;
    }
}

export async function getNonProfitProjects(id) {
    try {
        const options = {
            mode: 'cors',
            method: 'GET',
            headers: jsonHeaders
        };
        const response = await fetch(API_URL + '/projects/find/' + id, options);
        const responseData = await response.json();
        if(responseData.err === true) {
            throw new Error('Something went wrong');
        }
        return responseData.msg;
    }
    catch(e) {
        throw e;
    }
}

export async function updateProjectToBeComplete(id) {
    try {
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: jsonHeaders,
            body: JSON.stringify({id: id, token: localStorage.getItem('id_token')})
        };

        const response = await fetch(API_URL + '/projects/complete', options);
        const responseData = response.json();
        if(responseData.err === true) {
            throw new Error('Something went wrong');
        }
        return responseData;
    }
    catch(e) {
        throw e;
    }
}

export async function createCharge(data) {
    try {
        const options = {
            mode: 'cors',
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify({id: data.id, stripeToken: data.token, email: data.email, price: data.price, projectId: data.projectId, token: localStorage.getItem('id_token')})
        };

        const response = await fetch(API_URL + '/projects/charge', options);
        const responseData = await response.json();
        if(responseData.err === true) {
            throw new Error('Something went wrong');
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

function createLocalStorageToken(token) {
    localStorage.setItem('id_token', token);
}

function getLocalStorage(key) {
    return localStorage.getItem(key);
}
