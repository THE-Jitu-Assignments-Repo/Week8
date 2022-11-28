// import { async } from "@firebase/util";
import axios from 'axios'
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import { validateProductSchema } from '../../Helpers/Validation';
import { toast } from "react-toastify"


const initialState = {
    product: [],
    showCart: false
}

export const postProduct = createAsyncThunk(
    "products/postProducts",
    async (product, thunkApi) => {
        console.log(product);
        try{

            await validateProductSchema(product)
            const response = await axios.post('http://localhost:5001/addproduct', product)
    
            thunkApi.dispatch(getProduct()) // mike note this very key "wisdom"
            toast.success("Successfully Added product")
            return response.data
        } catch(error){
            toast.error(error.message, {})
        }
    }
)




export const getProduct = createAsyncThunk(
    "products/getProduct",
    async () => {
        
        try {
            
            const response = await axios.get('http://localhost:5001')
            let fetched = response.data
            // console.log(fetched);
           return fetched
        
            
        } catch (err) {
            console.log(err)
        }
    }
    
    )

    // add to cart
    export const addtocart = createAsyncThunk(
        "products/addtocart",
        async (id)=>{
            try {
                
                const response = await axios.put(`http://localhost:5001/cart/addtocart/${id}`)
             
                return response.data
            } catch (error) {
                console.log("did not addtocart", error);
            }
        }
    )
    
    
 



export const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers(builder) {
        builder.addCase(getProduct.fulfilled, (state, action) => {
                state.product = action.payload;
            }),
            builder.addCase(postProduct.fulfilled, (state, action) => {
                state.product.push(action.payload);
            }),
        builder.addCase(addtocart.fulfilled, (state,action)=>{
            console.log("action.payload");
        })

    }
})

export default productSlice.reducer;