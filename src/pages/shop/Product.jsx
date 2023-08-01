import React from 'react'
import './shop.css'

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;

  return (
    <div className="">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>

    </div>
  )
}
