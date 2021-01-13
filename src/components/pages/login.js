import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import api from '../../api';

export default function SignUp () {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    const [userToken, getUserToken] = useState('');


    const handleChangeEmail = (e) => {
        getEmail(e.target.value);
    }
    
    const handleChangePassword = (e) => {
        getPassword(e.target.value)
    }

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        
        await api.post('/users/login', {
            email: email,
            password: password
        })
        .then (res => res.data)
        .then(res => {
            getUserToken(res.token)
        })
        .catch(error => console.log(error));

        window.location.reload();
    }
    api.defaults.headers.Authorization = `Bearer ${userToken}`
    localStorage.setItem('token', JSON.stringify(userToken))

    return (
            <div>
                <form
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="email"  
                        placeholder="Email" 
                        name="email" 
                        autoComplete='true' 
                        onChange={handleChangeEmail} 
                    />

                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        autoComplete='true' 
                        onChange={handleChangePassword} 
                    />
                    <button type="submit"> Submit</button>
                </form>
            </div>
    )
}

