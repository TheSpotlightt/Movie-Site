import React, { useState } from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';

import { Container, Title, Form, Input, SubmitButton, Para } from './styles/signup-styles';

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
        <Container>
            <Title> Create an Account </Title>
            <Form
                onSubmit={handleSubmit}
            >
                <Input 
                    type="text" 
                    placeholder="Name" 
                    name="userName" 
                    autoComplete='true' 
                    onChange={handleChangeUserName} 
                />
                
                <Input 
                    type="number" 
                    placeholder="age" 
                    name="userAge" 
                    autoComplete='true' 
                    onChange={handleUserAge} 
                />

                <Input 
                    type="email"  
                    placeholder="Email" 
                    name="email" 
                    autoComplete='true' 
                    onChange={handleChangeEmail} 
                />

                <Input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    autoComplete='true' 
                    onChange={handleChangePassword} 
                />
                <SubmitButton type="submit"> Submit</SubmitButton>
                <Para> Already have an account? <Link to='/login' style={{color: '#fefefe'}}>Login</Link> </Para>
            </Form>
        </Container>
    )
}

