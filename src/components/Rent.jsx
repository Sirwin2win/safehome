import React from 'react'

const Rent = () => {
  return (
       <form >
         {/* Home Type */}
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
        {/* Home Status */}

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
                    {/* Price Range */}
         
         <div className='px-10'>
            <p className='text-2xl font-bold my-5'>Price Range</p>
            <p className='text-center text-blue-900 font-bold'>OK</p>
            <input type="range" min='0' max='100' value='0' className='bg-blue-900 my-5 w-full' />
            <div className='flex justify-between'>
                <p className='text-blue-900'>Min Price</p>
                <p className='text-blue-900'>Max Price</p>
            </div>

            <p className='text-2xl font-bold my-5'>Bedrooms</p>
            <div className='flex justify-between'>
                <p>1</p>
                <p>6+</p>
            </div>
            <input type="range" min='0' max='6' step='1' className='w-full' />

            <p className='text-2xl font-bold my-5'>Bathrooms</p>
            <div className='flex justify-between'>
                <p>1</p>
                <p>4+</p>
            </div>
            <input type="range" min='0' max='6' step='1' className='w-full' />
         </div>

    </form>
  )
}

export default Rent