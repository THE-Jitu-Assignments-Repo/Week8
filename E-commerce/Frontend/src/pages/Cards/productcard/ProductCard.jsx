import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../../../features/products/productSlice";

import "./productcard.css"

function ProductCard({data, product_id}) {
  const dispatch = useDispatch()
            
  const handleCart = (id) => {
    dispatch(addtocart(id))
  }
 
  return (
    <div className="product--card" key={product_id}>
      <div className="product--card__top">
          <div className="product--rate">-{data?.discount_rate}%</div>
        <img src={data?.imageurl} alt="product--img" className="image--product"/>
      </div>
      <div className="product--card__bottom">
        <div className="product--card__header">
          <div className="title--card">{data?.name}</div>
        </div>
        {/* <div className="product--description">{data.description}</div> */}
        <div className="product--card__header">
          <div className="kash--card">
            <div className="kk">
                <div>Ksh. {Math.floor(Math.abs(data?.price*data?.discount_rate/100))}</div>
                <div className="from">Ksh.{data?.price}</div>
            </div>
            </div>
          <div className="product--cart" onClick={()=>handleCart(product_id)}>Add to Cart <FaShoppingBag /></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
