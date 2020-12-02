import React, { useState } from 'react';
import { signUp, signInWithGoogle } from '../helpers/auth';
import { Link } from 'react-router-dom';

export default function SignUp () {
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

        await signUp(email, password);
    }

    const googleSignUp = async () => {
        await signInWithGoogle();
    }

    return (
        <div>
            <form
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h1>
                    Sign Up
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

                <button onClick={googleSignUp}> 
                    Sign In with Google
                </button>

                <p>
                    Already have an account? <Link to="/signin"> Sign In</Link>
                </p>
            </form>
        </div>
    )
}