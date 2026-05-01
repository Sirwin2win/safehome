import React from 'react'

const Rent = () => {
  return (
    <form >
        <p className='text-2xl font-bold my-5'>Home Type</p>

        <div className='inline md:block ps-2'>
            <input type="checkbox" />
            <label htmlFor="apartmen" className='ms-3 text-xl font-[400]'>Apartment</label>
        </div>

        <div className='my-5 inline md:block'>
            <input type="checkbox" className='ms-2' />
            <label htmlFor="condo" className='ms-3 text-xl font-[400]'>Condo</label>
        </div>

        <div className='inline md:block'>
            <input type="checkbox" className='ms-2'/>
            <label htmlFor="duplex" className='ms-2 text-xl font-[400]'>Duplex</label>
        </div>
            <br />
        <div className='my-5 inline md:block ms-4'>
            <input type="checkbox" className='ms-1' />
            <label htmlFor="villa" className='ms-3 text-xl font-[400]'>Villa</label>
        </div>

         <p className='text-2xl font-bold my-5'>Home Status</p>
         
        {/* <div className=''> */}
        <div className='flex md:grid md:grid-cols-2 md:gap-4'>
            <div className='my-5 px-2 flex justify-center border border-gray-300 rounded-full'>
            <input type="radio" />
            <label htmlFor="rent" className='ms-3 text-xl font-[400]'>Rent</label>
        </div>
         
        <div className='my-5 px-2 flex justify-center border border-gray-300 rounded-full mx-5 md:mx-0'>
            <input type="radio" />
            <label htmlFor="rent" className='ms-3 text-xl font-[400]'>Buy</label>
        </div>
         
        <div className='my-5 px-2 flex justify-center border border-gray-300 rounded-full'>
            <input type="radio" />
            <label htmlFor="rent" className='ms-3 text-xl font-[400]'>Sold</label>
        </div>
        </div>

         <p className='text-2xl font-bold my-5'>Price Range</p>

    </form>
  )
}

export default Rent