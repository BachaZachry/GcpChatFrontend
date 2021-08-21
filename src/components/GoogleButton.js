import GoogleLogin from "react-google-login";
import React from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleUserLogin } from "../features/userSlice";

export const GoogleButton = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    // Login procedure
    async function responseGoogle (response) {
        await dispatch(googleUserLogin(response.accessToken))
        history.push("/");
    }
    
    
    return (
        <GoogleLogin clientId="1086883892528-l8brh0uvvub1pstb511v7og41ffpfssr.apps.googleusercontent.com"
                         buttonText="Log in with Google"
                         onSuccess={responseGoogle}
                         onFailure={err => console.log(err)}/>
    )
}
