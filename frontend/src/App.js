// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Welcome to the Streaming Platform</h1>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<h2>Please choose to login or register.</h2>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;