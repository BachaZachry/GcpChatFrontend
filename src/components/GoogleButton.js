import GoogleLogin from "react-google-login";
import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
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
    
    
    return (
        <GoogleLogin clientId="1086883892528-l8brh0uvvub1pstb511v7og41ffpfssr.apps.googleusercontent.com"
                         buttonText="Log in with Google"
                         onSuccess={responseGoogle}
                         onFailure={err => console.log(err)}/>
    )
}
