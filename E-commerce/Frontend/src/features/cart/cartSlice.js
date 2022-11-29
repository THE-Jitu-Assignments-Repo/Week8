import axios from 'axios'
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const initialState = {
    cart: [],
    totalPrice: 0
}



export const getCart = createAsyncThunk(
    'cart/getCart',
    async () => {

        try {
            
            const response = await axios.get('http://localhost:5001/cart')
            console.log("cart",response.data);
            return response.data
        } catch (error) {
            console.log("cart error",error);
        }
    })


export const incQuantity = createAsyncThunk(
    'cart/incQuantity',
    async (id, {dispatch}) =>{
        try {
            const response = await axios.post(`http://localhost:5001/cart/addquantity/${id}`)
            dispatch(getCart())
            return response.data
            
        } catch (error) {
            console.log(error);
        }

    }

)

export const decQuantity = createAsyncThunk(
    'cart/decQuantity',
    async (id, {dispatch}) =>{
        try {
            const response = await axios.post(`http://localhost:5001/cart/reducequantity/${id}`)
            dispatch(getCart())
            return response.data
            
        } catch (error) {
            console.log(error);
        }

    }

)


export const removeSingleItem = createAsyncThunk(
    'cart/removeSingleItem',
    async (id, {dispatch}) =>{
        try {
            const response = await axios.post(`http://localhost:5001/cart/removeSingleItem/${id}`)
            dispatch(getCart())
            toast.success("Successfully removed")
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
)



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers(builder){
        builder.addCase(getCart.fulfilled,(state,action)=>{
            state.cart= action.payload
        }),
        builder.addCase(getCart.rejected,(state,action)=>{
            console.log(action.payload);
    }),
     builder.addCase(incQuantity.fulfilled,(state,action)=>{
        console.log(action.payload);
     }),
      builder.addCase(decQuantity.fulfilled,(state,action)=>{
        console.log(action.payload);
     }),
      builder.addCase(removeSingleItem.fulfilled,(state,action)=>{
        console.log(action.payload);
    })

}
})

export default cartSlice.reducer
