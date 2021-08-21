import GoogleLogin from "react-google-login";
import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { googleLogin } from "../features/auth";
import { useDispatch, useSelector } from "react-redux";
import { googleUserLogin, loadUser } from "../features/userSlice";

export const GoogleButton = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userStatus = useSelector((state) => state.user.status);
    // Login procedure
    async function responseGoogle (response) {
        await dispatch(googleUserLogin(response.accessToken))
        history.push("/");
    }

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
        <GoogleLogin clientId="1086883892528-l8brh0uvvub1pstb511v7og41ffpfssr.apps.googleusercontent.com"
                         buttonText="Log in with Google"
                         onSuccess={responseGoogle}
                         onFailure={err => console.log(err)}/>
    )
}
