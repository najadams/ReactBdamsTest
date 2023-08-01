import React from 'react'
import { Product } from './Product'
import { PRODUCTS } from '../../products'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className="shopTitle">
            Bdams Mege Ventures
        </div>
        <div className="products">
            <Product data={PRODUCTS.map(products => {

            })} />
        </div>
    </div>
  )
}