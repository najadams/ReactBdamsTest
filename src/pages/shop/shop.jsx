import React from 'react'
import { Product } from './Product'
import { PRODUCTS } from '../../products'
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className="shopTitle">
            Bdams Mege Ventures
        </div>
        <div className="products">
            {PRODUCTS.map(products =>(
            <Product data={products} />
            )
            )} 
        </div>
    </div>
  )
}