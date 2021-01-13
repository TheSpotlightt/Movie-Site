import React, { useState } from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';

import { Container, Title, Form, Input, SubmitButton, SignUpPara } from './styles/login-styles';

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
            <Container>
                <Title> Login </Title>
                <Form
                    onSubmit={handleSubmit}
                >
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
                    <SignUpPara>
                        Don't have an account? <Link to="/signup" style={{color: '#fefefe'}}>Sign up</Link>
                    </SignUpPara>
                </Form>
            </Container>
    )
}

