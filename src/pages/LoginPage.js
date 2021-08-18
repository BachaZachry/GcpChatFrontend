import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleButton } from '../components/GoogleButton';
import { loadUser } from '../features/userSlice';

export const LoginPage = () => {
    const error = useSelector((state) => state.user.error);
    const userStatus = useSelector((state) => state.user.status);
    const dispatch = useDispatch();
    const history = useHistory();
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
