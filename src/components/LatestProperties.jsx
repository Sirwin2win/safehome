import React from 'react'

const LatestProperties = () => {
  return (
    <div className=''>
        <p className='text-3xl font-bold text-center mb-5'>Explore Our Latest Properties</p>
        <div className='flex justify-center'>
            <button className='border-1 rounded-full px-3 bg-[#223B7EC9] text-white'>All Type</button>
            <button className='border-1 rounded-full px-3 mx-3 text-[#223B7EC9]'>Villa</button>
            <button className='border-1 rounded-full px-3 text-[#223B7EC9]'>Duplex</button>
            <button className='border-1 rounded-full px-3 mx-3 text-[#223B7EC9]'>Condos</button>
            <button className='border-1 rounded-full px-3 text-[#223B7EC9]'>Mountain View</button>
        </div>
    </div>
  )
}

export default LatestProperties