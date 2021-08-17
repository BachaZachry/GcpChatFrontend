import React from 'react';
import { useSelector } from 'react-redux';
import { GoogleButton } from '../components/GoogleButton';

export const LoginPage = () => {
    const error = useSelector((state) => state.user.error);
    const bol = error != null
    return (
        <div>
            <div>
                Text component
            </div>
            <div>
                <GoogleButton/>
            </div>
            <div>{bol ?  <h2>{error.detail}</h2> : <h2>no error</h2>}</div>
        </div>
    )
}
