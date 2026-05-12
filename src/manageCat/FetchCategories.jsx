import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../features/category/categorySlice'
import { Link } from 'react-router-dom'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";



const FetchCategories = () => {
    const {categories, status,error} = useSelector(state=>state.categories)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchCategories())
        }
    },[status,dispatch])
    console.log(categories)

  return (
    <div className="overflow-x-auto">
        <div className="overflow-x-auto">
  <table className="min-w-full border border-gray-200 rounded-lg">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Id</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Categories</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Action</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      
        {categories.map(cat=>(
            <tr className="hover:bg-gray-50" key={cat.id}>
                            <td className="px-4 py-2 text-sm text-gray-700">{cat.id}</td>
        <td className="px-4 py-2 text-sm text-gray-700">{cat.name}</td>
        <td className="px-4 py-2 text-sm text-gray-700"><Link to={'#'} className='text-omaOrange'><FaEdit /></Link> | <Link to={'#'} className='text-red-500'><FaRegTrashAlt /></Link></td>
                </tr>
        ))}

    </tbody>
  </table>
</div>
    </div>
  )
}

export default FetchCategories