import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../features/userSlice';

export const LoginForm = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const userStatus = useSelector((state) => state.user.status);
    const dispatch = useDispatch();
    const onUsernameChanged = (e) => setUsername(e.target.value);
    const onPasswordChanged = (e) => setPassword(e.target.value);
    const canSave = 
        [username,password].every(Boolean) && userStatus === 'idle';
    const login = async () => {
            await dispatch(userLogin({username,password}));
    }
    return (
        <div>
            <form>
                <label htmlFor="username"> Username: </label>
                <input type="text" id="username" placeholder="Username"
                    value={username} onChange={ onUsernameChanged } />
                <label htmlFor="password"> Password: </label>
                <input type="password" id="password" placeholder="Password"
                    value={password} onChange={ onPasswordChanged } />
                <button onClick={login}>Login</button>
            </form>
            {/* Handling errors here */}
        </div>
    )
}
