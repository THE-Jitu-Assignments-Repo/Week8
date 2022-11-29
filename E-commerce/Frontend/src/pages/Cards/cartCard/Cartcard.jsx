import React from 'react'
import { useDispatch} from 'react-redux'
import { decQuantity, incQuantity, removeSingleItem } from '../../../features/cart/cartSlice'
// import { addQuantity, deleteItem, patchQuantity, reduceQuantity} from '../../../features/products'
import "./CartCard.css"


function Cartcard({item}) {
    console.log("itemm",item)
    const dispatch = useDispatch()

    

  return (
    <div className='cart--card' key={item.product_id}>
        <div className="image">
            <img src={item.imageurl} alt="cart--image" />
        </div>
        <div className="cart--item--head">
            <h3 className='cart--title'>{item.name}</h3>
            <p>{item.description}</p>
        </div>
        <div className="cart--item--add">
            <button onClick={()=> dispatch(decQuantity(item.product_id))}>-</button>
            <p>{item.quantity}</p>
            <button onClick={()=> dispatch(incQuantity(item.product_id))}>+</button>
        </div>
        <div className="cart--price--details">
            <div className="cart--kash--card">Ksh. {item.price * item.quantity}</div>
          <div className="item--discount--cart">Discount: {item.discount_rate}%</div>
          <span className='remove--single' onClick={()=>dispatch(removeSingleItem(item.product_id))}>Remove</span>
        </div>
    </div>
  )
}

export default Cartcard