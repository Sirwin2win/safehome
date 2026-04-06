import React from 'react'
import aboutImg from '../assets/vectors/safe_home_properties_aboutVector.png'
import members from '../assets/images/safe_home_members.jpg'

const AboutCard1 = () => {
  return (
    <div>
        {/* Welcome note started */}
        <div className='relative'>
        <img src={aboutImg} className='mx-auto opacity-50' alt="" />
        <div className='absolute bottom-50 mx-80'>
            <p className='text-3xl font-bold text-center my-5'>Welcome  to SafeHomes</p>
            <p className='text-center'>Your trusted partner in redefining living experiences across residential and commercial 
                communities in Africa. At SafeHomes, we’re committed to streamlining property
                management with our innovative technology platform.</p>
        </div>
        </div>
        {/* welcome note ended */}
        {/* Members First Image */}
        <img src={members} alt="members" className='h-200 w-full px-10' />



    </div>
  )
}

export default AboutCard1