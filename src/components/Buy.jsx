import React from 'react'

const Buy = () => {
  return (
    <form>
        <p className='text-2xl font-bold my-5'>Home Type</p>

        <div>
            <input type="checkbox" />
            <label htmlFor="apartmen" className='ms-3 text-xl font-[400]'>Apartment</label>
        </div>

        <div className='my-5'>
            <input type="checkbox" />
            <label htmlFor="condo" className='ms-3 text-xl font-[400]'>Condo</label>
        </div>

        <div>
            <input type="checkbox" />
            <label htmlFor="duplex" className='ms-3 text-xl font-[400]'>Duplex</label>
        </div>

        <div className='my-5'>
            <input type="checkbox" />
            <label htmlFor="villa" className='ms-3 text-xl font-[400]'>Villa</label>
        </div>

         <p className='text-2xl font-bold my-5'>Home Status</p>
         
        <div className='grid grid-cols-2 gap-4'>
            <div className='my-5 px-2 flex justify-center border border-gray-300 rounded-full'>
            <input type="radio" />
            <label htmlFor="rent" className='ms-3 text-xl font-[400]'>Rent</label>
        </div>
         
        <div className='my-5 px-2 flex justify-center border border-gray-300 rounded-full'>
            <input type="radio" />
            <label htmlFor="rent" className='ms-3 text-xl font-[400]'>Rent</label>
        </div>
         
        <div className='my-5 px-2 flex justify-center border border-gray-300 rounded-full'>
            <input type="radio" />
            <label htmlFor="rent" className='ms-3 text-xl font-[400]'>Rent</label>
        </div>
        </div>

    </form>
  )
}

export default Buy