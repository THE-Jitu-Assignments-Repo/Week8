import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit'
import userReducer from './features/auth/userSlice';
import cartReducer from './features/cart/cartSlice';
import productsReducer from './features/products/productSlice'

const RootReducer = combineReducers({

  user: userReducer,
  product: productsReducer,
  cart: cartReducer
})

export default configureStore({
  reducer: RootReducer,
});