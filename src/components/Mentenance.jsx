import React from 'react'

const Mentenance = () => {
  return (
    <div className='p--5'>
        <p className='text-2xl font-bold'>Maintenance Requests</p>
        <p className='text-gray-500'>Submit and track maintenance request for your property</p>
          {/* Two Splitted Divs */}
        <div className='flex justify-between my-10'>
          <form className='bg-[#F5F5F5] py-5 px-3'>
            <p className='text-xl font-bold'>Submit a New Request</p>
              <p className='text-gray-500 mt-3 mb-10'>Please fill out the form below. Provide as much details as 
                <span className='block'>possible. </span>
                </p>

                <div>
                  <label htmlFor="category" className='text-lg font-700 block'>Category/Type of issue</label>
                  <select name="" id="" className='border border-gray-400 w-full my-5 h-15 rounded-lg'>
                    <option value="" className=''>Select an issue type</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="category" className='text-lg font-700 block'>Subject</label>
                  <input type="text" placeholder='e.g leaky faucet in the kitchen' 
                  className='border border-gray-400 w-full my-5 h-15 rounded-lg placeholder:ps-5' />
                </div>

                <div>
                  <label htmlFor="description" className='text-lg font-700 block'>Subject</label>
                  <textarea name="description" id="description"
                   className='border border-gray-400 w-full my-5 h-45 rounded-lg placeholder:ps-5'>

                  </textarea>
                </div>
          </form>
        </div>
    </div>
  )
}

export default Mentenance