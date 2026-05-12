import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { deleteProduct, fetchProducts } from '../features/products/productSlice';



const FetchProducts = () => {
     const {products, status,productError} = useSelector(state=>state.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchProducts())
        }
    },[status,dispatch])

 const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id));
    }
  };

  // RETURNS SHOULD COME AFTER HOOKS

  if (status === "loading") {
    return <p>Loading products...</p>;
  }

  if (status === "failed") {
    return <p>Error: {productError}</p>;
  }

  return (
    <div className="overflow-x-auto">
  <table className="min-w-full border border-gray-200 rounded-lg">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Id</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Title</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Location</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Estate</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Image</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Action</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {products.length === 0 ? (
  <tr>
    <td colSpan="6" className="text-center py-4">
      No products found
    </td>
  </tr>
) : (
      
        products && products.map(product=>(
        <tr className="hover:bg-gray-50" key={product.id}>
        <td className="px-4 py-2 text-sm text-gray-700">{product.id}</td>
        <td className="px-4 py-2 text-sm text-gray-700">{product.title}</td>
        <td className="px-4 py-2 text-sm text-gray-700">{product.location}</td>
        <td className="px-4 py-2 text-sm text-gray-700">{product.estate}</td>
        <td className="px-4 py-2 text-sm text-gray-700"><img src={`https://api.safehomeproperties.com/uploads/${product.image}`} alt={product.title} className='size-10'/></td>
       <td className="px-4 py-2 text-sm text-gray-700">
  <div className="flex items-center gap-3">
    <Link
      to={`/edit/${product.id}`}
      className="text-omaOrange"
    >
      <FaEdit />
    </Link>

    <button
      onClick={() => handleDelete(product.id)}
      className="text-red-500"
    >
      <FaRegTrashAlt />
    </button>
  </div>
</td>
                </tr>
        )))}
    </tbody>
  </table>

    </div>
  )
}


export default FetchProducts