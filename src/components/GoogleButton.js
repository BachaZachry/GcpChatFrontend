import GoogleLogin from "react-google-login";
import React from 'react'
import { useHistory } from "react-router-dom";
import { googleLogin } from "../features/auth";

export const GoogleButton = () => {
    let history = useHistory();
    async function responseGoogle (response) {
        await googleLogin(response.accessToken)
        history.push("/");
    }
    async function failure (error) {
        console.log(error);
    }
    return (
        <GoogleLogin clientId="1086883892528-l8brh0uvvub1pstb511v7og41ffpfssr.apps.googleusercontent.com"
                         buttonText="Log in with Google"
                         onSuccess={responseGoogle}
                         onFailure={responseGoogle}/>
    )
}
