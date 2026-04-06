import React from 'react'
import members2 from '../assets/images/safe_home_members2.png'


const OurStory = () => {
  return (
    <div>
                {/* Our Story Started */}
        <p className='text-3xl font-bold text-center'>Our Story</p>

        <p className='text-center my-10'>
            SafeHomes is a driven company focused on improving living experiences across residential and commercial communities in Africa. Our all-in-one platform simplifies collections, service charge management, utility vending,
             visitor access, and other essential services for multi-unit property developments across the continent.
        </p>
        <img src={members2} alt="" />
        {/* Our Story Ended */}
    </div>
  )
}

export default OurStory