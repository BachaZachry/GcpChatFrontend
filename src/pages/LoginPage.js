import React from 'react';
import { useSelector } from 'react-redux';
import { GoogleButton } from '../components/GoogleButton';

export const LoginPage = () => {
    const error = useSelector((state) => state.user.error);
    const userStatus = useSelector((state) => state.user.status);
    const bol = error != null
    
    return (
        <div>
            { userStatus === "loading" ? <div>loading</div> :
            <div>
            <div>
                Text component
            </div>
            <div>
                <GoogleButton/>
            </div>
            {/* Handling types of logout */}
            {/* Token invalid - Token expiration = Session expired,reconnect  */}

            <div>{bol ?  <h2>{ error.detail }</h2> : <h2>no error</h2>}</div></div>
}
        </div>
    )
}
