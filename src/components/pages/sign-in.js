import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signIn, signInWithGoogle } from '../helpers/auth';

export default function SignIn () {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');

    const handleChangeEmail = (e) => {
        getEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        getPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signIn(email, password);
    }

    const googleSignIn = async () => {
        await signInWithGoogle();
    }

    return (
        <div>
            Sign In
        </div>
    )
}