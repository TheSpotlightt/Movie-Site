import React, { useState } from 'react';
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
            <form
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h1>
                    Sign In
                </h1>

                <div>
                    <input 
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleChangeEmail}
                        value={email}
                        autoComplete="true"
                    />
                </div>

                <div>
                    <input 
                        placeholder="Password"
                        name="password"
                        type="password"
                        onChange={handleChangePassword}
                        value={password}
                        autoComplete="true"
                        maxLength={50}
                    />
                </div>

                <button type="submit"> Sign In </button>

                <button onClick={googleSignIn}> 
                    Sign In with Google
                </button>

                <p>
                    Don't have an account? <Link to="/signup"> Sign Up</Link>
                </p>
            </form>
        </div>
    )
}