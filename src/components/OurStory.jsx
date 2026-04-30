import React from 'react'
import members2 from '../assets/images/safe_home_members2.png'


const OurStory = () => {
  return (
    <div>
                {/* Our Story Started */}
                <div className="text-center px-6 py-10 max-w-4xl mx-auto">

<h2 className="text-3xl md:text-4xl font-bold mb-6">
  Our Story
</h2>

<p className="text-gray-700 leading-relaxed text-sm md:text-base">
  SafeHomes Property Management is a structured real estate asset management company
  focused on safeguarding landlord income and maintaining property value across premium
  locations in Abuja and beyond.
</p>

<p className="text-gray-700 leading-relaxed text-sm md:text-base mt-6">
  We are a team driven by systems, transparency, and results. Every process we implement
  is designed to eliminate inefficiencies, reduce risk, and ensure that our clients enjoy
  steady returns without the everyday stress of property oversight.
</p>

</div>
        <img src={members2} alt="" className='px-5'/>
        {/* Our Story Ended */}
    </div>
  )
}

export default OurStory