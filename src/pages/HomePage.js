import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { api } from '../api';
import { loadUser } from '../features/userSlice';

export const HomePage = () => {
    const dispatch = useDispatch();
    const userStatus = useSelector((state) => state.user.status)
    const username = useSelector((state) => state.user.username)
    const error = useSelector((state) => state.user.error)
    const history = useHistory();
    const test = () => {
        
    }
    useEffect(() => {
        if (userStatus==="idle") {
        dispatch(loadUser());}
        
    }, [userStatus,dispatch])
    useEffect(() => {
        if (userStatus==="failed") {
            history.push("/login")
        }
    }, [userStatus,dispatch])
    return (
        <div>
            <button onClick={test}>test</button>
            <div>hello { username }</div>
            {/* <div>{error.detail}</div> */}
        </div>
    )
}
