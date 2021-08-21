import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import { loadUser, userStatusSelector } from '../features/userSlice';

export const RegisterPage = () => {
    const error = useSelector((state) => state.user.error);
    const history = useHistory();
    const userStatus = useSelector(userStatusSelector);
    const dispatch = useDispatch();

    // In case of manually writing the register url
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
            <RegisterForm />
        </div>
    )
}
