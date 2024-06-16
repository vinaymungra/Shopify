import React from 'react'
import { cartDecreaseItemQuantity, cartIncreaseItemQuantity, cartRemoveItem } from '../store/slices/cartSlice.js'
import { useDispatch } from '../react-redux.js'

export default function CartItem({ id,title, rating, price, imageUrl, quantity }) {
  const dispatch=useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={()=>{dispatch(cartDecreaseItemQuantity(id))}}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>{dispatch(cartIncreaseItemQuantity(id))}}>+</button>
        <button onClick={()=>{dispatch(cartRemoveItem(id))}}>Remove</button>
        
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  )
}