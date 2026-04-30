import React from 'react'
import aboutImg from '../assets/vectors/safe_home_properties_aboutVector.png'
import members from '../assets/images/safe_home_members.jpg'

const AboutCard1 = () => {
  return (
    <div>
        {/* Welcome note started */}
        <div className="relative w-full">

{/* Background Image */}
<img
  src={aboutImg}
  className="w-full h-[500px] object-cover opacity-40"
  alt="About SafeHomes"
/>

{/* Overlay Content */}
<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
    Welcome to SafeHomes
  </h2>

  <p className="max-w-3xl text-gray-900 text-sm md:text-base leading-relaxed">
    Built on a foundation of structure, accountability and long-term vision,
    SafeHomes exists to solve one of the biggest problems in real estate 
    the uncertainty and stress that comes with managing valuable property assets.
    We understand that every property is more than just a building;
    it is a financial asset, a legacy, and a source of consistent income when properly managed.
    Our approach is simple but powerful: professional asset management with uncompromising standards.
  </p>

</div>
</div>
        {/* welcome note ended */}
        {/* Members First Image */}
        <img src={members} alt="members" className='md:h-200 md:w-full px-10' />



    </div>
  )
}

export default AboutCard1