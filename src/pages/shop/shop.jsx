import React from 'react'
import { Product } from './Product'
import { PRODUCTS } from '../../products'
import './shop.css'

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Bdams Mega Ventures</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product, key) => (
          <Product data={product} key={key}  />
        ))}
      </div>
    </div>
  );
};
