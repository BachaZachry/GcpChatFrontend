import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleButton } from '../components/GoogleButton';
import { LoginForm } from '../components/LoginForm';
import { loadUser, userStatusSelector } from '../features/userSlice';

export const LoginPage = () => {
    const error = useSelector((state) => state.user.error);
    const history = useHistory();
    const userStatus = useSelector(userStatusSelector);
    const dispatch = useDispatch();
    const bol = error != null

    // In case of manually writing the login url
    useEffect(() => {
        if (userStatus==="idle" || userStatus==="failed"){
            if (localStorage.getItem('token') != null) {
                dispatch(loadUser());
            }
    }
    }, [userStatus])

    // Redirecting to the main page in case of writing the login url and being connected
    useEffect(() => {
        if (userStatus==="succeeded") {
            history.push("/")
        }
    }, [userStatus])
    
    return (
        <div>
            { userStatus === "loading" ? <div>loading</div> :
            <div>
            <div>
                Text component
            </div>
            <div>
                <LoginForm />
            </div>
            <div>
                <GoogleButton/>
            </div>
            {/* To be moved */}
            {/* Handling types of logout */}
            {/* Token invalid - Token expiration = Session expired,reconnect  */}

            <div>{bol ?  <h2>{ error.detail }</h2> : <h2>no error</h2>}</div></div>
}
        </div>
    )
}
