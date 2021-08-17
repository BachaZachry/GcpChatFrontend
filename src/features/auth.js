import { api } from '../api/index';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const googleLogin = async (accesstoken) => {
    await api.post('users/rest-auth/google/',
    {access_token: accesstoken}).then((response) => {
        api.defaults.headers['Authorization'] = 'Token ' + response.data.token
        localStorage.setItem('token',response.data.token)
    })
    .catch(function (error) {
        console.log(error)
    })
}
