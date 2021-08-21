import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, userStatusSelector } from '../features/userSlice';

export const LoginForm = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const onUsernameChanged = (e) => setUsername(e.target.value);
    const onPasswordChanged = (e) => setPassword(e.target.value);
    const canSave = 
        [username,password].every(Boolean);
    const login = (e) => {
        e.preventDefault();
        if (canSave) {
            dispatch(userLogin({username,password}));
        }
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
