import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../features/category/categorySlice'
import CategoryForm from '../forms/CategoryForm'
import FetchCategories from './FetchCategories'

const GetCategories = () => {
  
  return (
    <div>
<CategoryForm />
<hr />
<FetchCategories />
    </div>
  )
}

export default GetCategories