import React from 'react'
import members from '../assets/images/safe_home_members.jpg'


const VisionAndMission = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Vision & Mission
    </h2>
  
    {/* Mission / Vision Text */}
    <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-10">
      To become a trusted household name in property asset management, known for delivering secure,
      high-performing real estate investments, and to set the standard for excellence, transparency,
      and long-term value creation in the real estate industry.
    </p>
  
    {/* Image */}
    <div className="flex justify-center">
      <img
        src={members}
        alt="SafeHomes Team"
        className="w-full max-w-3xl rounded-xl shadow-lg object-cover"
      />
    </div>
  
  </div>
  )
}

export default VisionAndMission