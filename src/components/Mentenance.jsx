import React, {useState} from 'react'
import { IoIosCloudUpload } from "react-icons/io";
import upload from '../assets/vectors/upload.png'
 

const Mentenance = () => {
   const [image, setImage] = useState('')
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

                {/* <div>
                  <label htmlFor="image" className='text-lg font-700 block'>Attach media(Photo/Video)</label>
                  <input type="file" id='image' name='image' 
                  className='border border-gray-400 w-full my-5 h-45 rounded-lg placeholder:ps-5'
                  />
                </div> */}

                <p>Attach media(Photo/Video)</p>

                <div className='border border-gray-400 w-full my-5 h-45 rounded-lg placeholder:ps-5'>
    
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
    <img src={image ? URL.createObjectURL(image) : upload} alt='' className='size-20 mx-auto' />
    </label>
       <div className='flex justify-center'>
      <p className='text-blue-700'>upload a file</p>
      <p className='ms-5'>or drag and drop</p>
     </div>
     <p className='text-gray-500 text-center'>PNG,JPG,GIF up to 10MB</p>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline form-control" id="image"
     name='image' onChange={(e) => setImage(e.target.files[0])} type="file" hidden required /> 
  </div>
  <button className='bg-[#FF6700C9] w-full font-bold rounded-lg py-2 my-5 text-[#223B7E]'>Submit Request</button>
          </form>
        </div>
    </div>
  )
}

export default Mentenance