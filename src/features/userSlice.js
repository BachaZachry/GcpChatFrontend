import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import {api} from '../api/index';

const initialState = {
    username: null,
    status: 'idle',
    error:null
}

export const loadUser = createAsyncThunk('user/loadUser', async(obj, {rejectWithValue}) => {
    // const history = useHistory();
    // await api.get('users/loaduser/').then((response) => {
    //     console.log(response.data.username);
    //     return response.data
    // }).catch((error) => {
    //     console.log(error);
    //     // history.push("/login");
    //     // return rejectWithValue(error.response.data)
    // })
    
   try{
    const response = await api.get('users/loaduser/');
    console.log(response)
    return response.data
   }catch(err) {
       localStorage.removeItem('token');
       api.defaults.headers['Authorization'] = null;
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
        }
    }
})

export default userSlice.reducer