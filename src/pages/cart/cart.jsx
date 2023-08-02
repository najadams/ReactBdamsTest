import React, { useContext } from 'react'
import {PRODUCTS } from '../../products'
import { CartItem } from './cart-item'
import { ShopContext } from '../../context/shop-context'

export const Cart = () => {
  const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cart'>
      <div className="cartTitle">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>
    </div>
  )
}
