import React from 'react'
import landlord from '../assets/images/safe_home_properties_landlord.jpg'
import resident from '../assets/images/safe_home_properties_resident.jpg'
import { Link } from 'react-router-dom'


const GetStarted = () => {
  return (
    <div className='px-10'>
        <p className='text-3xl text-center font-bold mt-10'>Let’s help you get started.</p>
        <p className='text-center mt-5 text-2xl'>Choose your category</p>
        <div className='md:flex md:justify-center my-10'>
            <div className='bg-[#F1F1F1] p-5 border rounded-lg'>
                <img src={landlord} alt=""  className='h-100 w-100 rounded-lg'/>
                <p className='font-bold mt-3 text-2xl'>Landlord?</p>
                <p className='text-2xl mt-5 text-[#8B8B8B]'>Continue and get started with
                     <span className='block'>SafeHomes to seamless living</span>
                      experiences.</p>
                      <button className='w-full h-10 bg-omaOrange text-white text-xl rounded-full mt-5'><Link to={'/signup'}>Continue</Link></button>
            </div>
            <div className='bg-[#F1F1F1] p-5 border rounded-lg my-20 md:my-0 md:ms-10'>
                <img src={resident} alt=""  className='h-100 w-100 rounded-lg'/>
                <p className='font-bold mt-3 text-2xl'>Resident?</p>
                <p className='text-2xl mt-5 text-[#8B8B8B]'>Continue and get started with
                     <span className='block'>SafeHomes to seamless living</span>
                      experiences.</p>
                      <button className='w-full h-10 bg-omaOrange text-white text-xl rounded-full mt-5'> <Link to={'/signup'}>Continue</Link></button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted