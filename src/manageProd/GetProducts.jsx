import React from 'react'
import ProductForm from '../forms/ProductForm'
import FetchProducts from './FetchProducts'

const GetProducts = () => {
  return (
    <div>
        <ProductForm />
        <hr />
        <FetchProducts />
    </div>
  )
}

export default GetProducts