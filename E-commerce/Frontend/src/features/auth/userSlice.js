import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const url = 'http://localhost:5001/user/login'



export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({ email, password }) => {

        const response = await axios.post(url, {
            email,
            password
        });

        console.log(response);
        localStorage.setItem("token", response.data.token);
        return response.data;
    }
    
)
export const registerUser = createAsyncThunk(
    'user/register',
    async(userDetails)=>{

        const response = await axios.post('http://localhost:5001/user/register', userDetails)
        console.log(response);
        return response.data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        token: ''
    },
    reducers:{

        logout:(state)=>{
            state.user = null
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(registerUser.fulfilled, (state, action) => {
            console.log(action.payload);
        }),
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload
            console.log(state.token)

        })

    }
});

export const { logout} = userSlice.actions;

// state selector

export const selectUser = (state) => state.user.user

export default userSlice.reducer;