import React from 'react'
import LeaseDocsTable from './LeaseDocsTable'
import { FaFileUpload,FaSearch  } from "react-icons/fa";



const LeaseDocs = () => {
  return (
    <div>
      {/* First Div */}
        <div className='flex justify-between'>
            <div>
              <p className='text-2xl font-bold'>Lease Documents</p>
              <p className='text-gray-500'>Review, manage and sign your important lease and documents here.</p>
            </div>
            <button className='flex justify-evenly bg-[#223B7E] text-white px-2 pt-3 rounded-lg'>
              <FaFileUpload className='size-5'/>
              <p className='ms-2'>Upload Document</p>
            </button>
        </div>
        {/* Second Div */}
        <div className='flex justify-between my-5'>
          <div className='relative w-full'>
        <input type="search"
         className='w-full h-15 bg-[#F5F5F5] placeholder:text-[#999999] placeholder:py-5 placeholder:ps-15'
         placeholder='search by name, property or document'
         />
         <FaSearch className='absolute bottom-5 left-5 size-5 text-gray-500' />
          </div>
         <select name="" id="" className='h-15 w-80 border border-1 ms-40'>
          <option value="">status:All</option>
         </select>
        </div>
        {/* Table */}
        <LeaseDocsTable />
    </div>
  )
}

export default LeaseDocs