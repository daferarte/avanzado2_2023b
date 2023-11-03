import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

export const signUp = createAsyncThunk('user/signUp',async (credential)=>{
    let response = await Axios.post(`${apiConfig.domain}/users/`,{
        user: credential.credential
    })
    console.log(response);

    return response.data.user;
});

let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status:''
    },
    reducers: {
        signIn:(state, action)=>{
            state.user = action.payload;
        },
        logOut:(state) => {
            state.user = null;
            state.status = '';
        }
    },
    extraReducers: {
        [signUp.pending]: (state, action) => {
            state.user = 'loading...';
        },
        [signUp.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [signUp.rejected]: (state, action) => {
            state.status = 'failed';
        }        
    }
});

export const {signIn, logOut} = userSlice.actions;

export default userSlice.reducer;