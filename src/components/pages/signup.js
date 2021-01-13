import React, { useState } from 'react';
import axios from 'axios';
import api from '../../api';

export default function SignUp () {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    const [userName, getUserName] = useState('');
    const [age, getAge] = useState('');
    const [userToken, getUserToken] = useState('');

    const handleChangeEmail = (e) => {
        getEmail(e.target.value);
    }
    
    const handleChangePassword = (e) => {
        getPassword(e.target.value)
    }
    
    const handleChangeUserName = (e) => {
        getUserName(e.target.value)
    }

    const handleUserAge = (e) => {
        getAge(e.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        await api.post('/users', {
            name: userName,
            age: age,
            email: email,
            password: password,
        })
        .then(res => res.data)
        .then(res => getUserToken(res.token))
        .catch(error => console.log(error))

        window.location.reload();
    }
    localStorage.setItem('token', JSON.stringify(userToken))

    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
            
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="userName" 
                    autoComplete='true' 
                    onChange={handleChangeUserName} 
                />
                
                <input 
                    type="number" 
                    placeholder="age" 
                    name="userAge" 
                    autoComplete='true' 
                    onChange={handleUserAge} 
                />

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

