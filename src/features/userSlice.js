import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {api} from '../api/index';

const initialState = {
    username: null,
    status: 'idle',
    error:null
}

export const loadUser = createAsyncThunk('user/loadUser', async(obj, {rejectWithValue}) => {
   try{
        const response = await api.get('users/loaduser/');
        console.log(response)
        return response.data
   }
   catch(err) {
        localStorage.removeItem('token');
        api.defaults.headers['Authorization'] = null;
        return rejectWithValue(err.response.data);
   }
})

export const googleUserLogin = createAsyncThunk('user/googleUserLogin', async(accesstoken,{rejectWithValue}) => {
    try {
        const response = await api.post('users/rest-auth/google/', 
        {access_token: accesstoken});
        console.log("done");
        api.defaults.headers['Authorization'] = 'Token ' + response.data.token
        localStorage.setItem('token',response.data.token)
        return response.data
    }
    catch(err) {
        console.log(err);
        return rejectWithValue(err.response.data);
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers : {
        [loadUser.pending] : (state, action) => {
            state.status = 'loading'
        },
        [loadUser.fulfilled] : (state, action) => {
            state.status = 'succeeded'
            state.username = action.payload.username
        },
        [loadUser.rejected] : (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [googleUserLogin.pending] : (state, action) => {
            state.status = 'loading'
        },
        [googleUserLogin.fulfilled] : (state, action) => {
            state.status = 'succeeded'
            state.username = action.payload.user
        },
        [googleUserLogin.rejected] : (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
    }
})

export default userSlice.reducer