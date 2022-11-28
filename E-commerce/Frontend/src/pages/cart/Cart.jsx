import React, { useEffect} from "react";
import {  useDispatch, useSelector } from "react-redux";  
import { getCart } from "../../features/cart/cartSlice";
import Cartcard from "../Cards/cartCard/Cartcard";
import "./cart.css"

function Cart() {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart);

  console.log("caaartt",cart?.cartItems);

  // const totalCart = cart?.reduce((total,item)=> total + Number(item.totalPrice),0)

    useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="cart--content">
      <div className="cart--content--header">
        <span className="cart--head--tag">E-Market Cart</span>
        <span className="remove--all">CLEAR CART</span>
      </div>
      {cart?.cartItems?.map((item) => (
        <Cartcard item={item} />
      ))}
      <div className="total--session">
      <hr/>
      <span>Total: Ksh. </span>

      </div>

    </div>
  );
}

export default Cart;
