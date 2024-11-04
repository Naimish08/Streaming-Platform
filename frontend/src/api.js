// frontend/src/api.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const registerUser  = async (email, password) => {
    const response = await fetch(`${API_URL}/api/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};

export const loginUser  = async (email, password) => {
    const response = await fetch(`${API_URL}/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};