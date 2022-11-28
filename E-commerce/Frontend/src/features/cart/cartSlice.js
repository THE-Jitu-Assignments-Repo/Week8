import axios from 'axios'
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
}



export const getCart = createAsyncThunk(
    'cart/getCart',
    async (_, thunkAPI) => {

        try {
            
            const response = await axios.get('http://localhost:5001/cart/getCart')
            console.log("cart",response.data);
            return response.data
        } catch (error) {
            
        }
    })


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers(builder){
        builder.addCase(getCart.fulfilled,(state,action)=>{
            state.cart = action.payload
        })
    }
})

export default cartSlice.reducer
