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
    cart: [],
    totalQuantity: 0,
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
        async (item, {dispatch})=>{
            // console.log(item)
            const response = await axios.post(url2,item)
            dispatch(getcart())
            return response.data
        }
    )
    
    
    // get cart items
    
    export const getcart = createAsyncThunk(
        "products/getcart",
        async () => {
    
            try {
    
                const response = await axios.get(url2)
                let fetchedcart = response.data
                let mycartData = []
                for (let key in fetchedcart) {
                    mycartData.push({
                        cartId: key,
                        id: fetchedcart[key].id,
                        title: fetchedcart[key].title,
                        description: fetchedcart[key].description,
                        image: fetchedcart[key].image,
                        price: fetchedcart[key].price,
                        discount: fetchedcart[key].discount,
                        Quantity: fetchedcart[key].Quantity,
                        totalPrice: fetchedcart[key].totalPrice
                    })
                }
    
                // console.log("dvs", mycartData);
                return mycartData
    
            } catch (err) {
                console.log(err)
            }
        }
    )

// delete item from cart 

export const deleteItem = createAsyncThunk(
    "products/deleteItem",
    async (id,{dispatch})=>{

        // const {id} = useParams
        const response = await axios.delete(`https://react-e-commerce-ead8d-default-rtdb.firebaseio.com/cart/${id}.json`);
        // console.log(response)
        dispatch(getcart());

    // await state.cart.filter((item) => {
    //     if(item.id === id){

    //         const response = axios.delete(`https://react-e-commerce-ead8d-default-rtdb.firebaseio.com/cart.json/:${id}`)
    //         console.log(response)
    //         dispatch(getcart())
    //         return response.data
    //     }
    
    // });

    }
)


export const patchQuantity = createAsyncThunk(
    "products/patchQuantity",
     async({CartID, newQuantity})=> {
        await axios.patch(`https://react-e-commerce-ead8d-default-rtdb.firebaseio.com/cart/${CartID}/Quantity.json`, {
        newQuantity
    })
})
    



export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addQuantity: (state, action) => {
            const selectedQ = state.cart.map(item => {
                if (item.id === action.payload) {
                    item.Quantity +=1
                    item.totalPrice += item.totalPrice
                }
                return item
            })

            state.cart = selectedQ
        },
        reduceQuantity: (state, action) => {
            const selectedQ = state.cart.map(item => {
                if (item.id === action.payload) {
                    item.totalPrice -=item.price
                    item.Quantity -= 1
                } 
                return item
            })
            

            state.cart = selectedQ 
        },
    },
    extraReducers(builder) {
        builder.addCase(getProduct.fulfilled, (state, action) => {
                state.product = action.payload;
            }),
            builder.addCase(postProduct.fulfilled, (state, action) => {
                state.product.push(action.payload);
            }),
        builder.addCase(addtocart.fulfilled, (state,action)=>{
            state.cart.push(action.payload)
        }),
        builder.addCase(getcart.fulfilled, (state,action)=>{
            state.cart = action.payload;

        }), builder.addCase(patchQuantity.rejected, (state,action)=>{
            console.log(action.payload)
        });

    }
})

export const {
    addQuantity,
    reduceQuantity,
} = productSlice.actions;

export default productSlice.reducer;