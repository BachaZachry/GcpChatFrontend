import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userRegister } from '../features/userSlice';

export const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const onUsernameChanged = (e) => setUsername(e.target.value);
    const onEmailChanged = (e) => setEmail(e.target.value);
    const onPasswordChanged = (e) => setPassword(e.target.value);
    const canSave = 
        [username,email,password].every(Boolean);
    const register = (e) => {
            e.preventDefault();
            dispatch(userRegister({username,email,password}));
    }
    return (
        <div>
            <form>
                <label htmlFor="username"> Username: </label>
                <input type="text" id="username" placeholder="Username"
                    value={username} onChange={ onUsernameChanged } />
                <label htmlFor="email"> Email: </label>
                <input type="email" id="email" placeholder="Email"
                    value={email} onChange={ onEmailChanged } />
                <label htmlFor="password"> Password: </label>
                <input type="password" id="password" placeholder="Password"
                    value={password} onChange={ onPasswordChanged } />
                <button onClick={register}>Register</button>
            </form>
        </div>
    )
}
