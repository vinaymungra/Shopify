import React from 'react'
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from '../store/slices/cartSlice.js'
import { useDispatch } from '../react-redux.js'

export default function CartItem({ productId,title, rating, price, imageUrl, quantity }) {
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
        <button onClick={()=>{console.log(decreaseCartItemQuantity({productId:productId})),dispatch(decreaseCartItemQuantity({productId:productId}))}}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>{dispatch(increaseCartItemQuantity({productId:productId}))}}>+</button>
        <button onClick={()=>{dispatch(removeCartItem({productId:productId}))}}>Remove</button>
        
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  )
}