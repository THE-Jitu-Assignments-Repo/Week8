import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
import {
    toast
} from "react-toastify";


const url = 'http://localhost:5001/user/login'



export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({
        email,
        password
    }) => {

        try {
            const response = await axios.post(url, {
                email,
                password
            });

            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            return response.data;
            
        } catch (error) {

            toast.error(error.response.data.message);

        }
    }

)
export const registerUser = createAsyncThunk(
    'user/register',
    async (userDetails) => {

        const response = await axios.post('http://localhost:5001/user/register', userDetails)
        console.log(response);
        toast.success(response.data)
        return response.data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: ''
    },
    reducers: {

        logout: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
                console.log(action.payload);
            }),
            builder.addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload
                console.log(state.token)

            })

    }
});

export const {
    logout
} = userSlice.actions;

// state selector

export const selectUser = (state) => state.user.user

export default userSlice.reducer;