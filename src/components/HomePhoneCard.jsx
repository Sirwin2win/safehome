import React from 'react'
import makingCall from '../assets/vectors/makingCall.png'
import phone from '../assets/vectors/phonePng.png'

const HomePhoneCard = () => {
  return (
    <div className='flex justify-spaced my-10 ms-80'>
        <div className='relative'>
            <img src={makingCall} alt="makingCall" className='opacity-30 h-80 w-80' />
                <p className='absolute bottom-30 text-xl'>Easily pay bills and get instant value for 
                   your payments, purchase energy anytime 
                    and from anywhere, securely register
                    visitors without hassle, download electronic
                    statements and utility bills, and
                     conveniently report and track issues.
                     </p>
                {/* <p className='absolute bottom-30 text-md'>Easily pay bills and get instant value for 
                   <span className='block'> your payments, purchase energy anytime</span> 
                    <span className='block'>and from anywhere, securely register</span> 
                    <span className='block'>visitors without hassle, download electronic</span> 
                    <span className='block'>statements and utility bills, and</span>
                     <span className='block'>conveniently report and track issues.</span>
                     </p> */}
        </div>
        <div>
            <img src={phone} alt="phonePng" className='h-100' />
            
        </div>

    </div>
  )
}

export default HomePhoneCard