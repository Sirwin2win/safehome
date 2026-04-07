import React from 'react'
import { BsStars } from "react-icons/bs";


const FeaturesCard = () => {
  return (
    <div className='my-10 bg-[#F5F5F5] mx-20'>

        
            <button className='flex justify-center bg-[#223B7E99] rounded-full mx-auto py-2 px-4'>
                <BsStars className='size-5'/>
                <p className='ms-2'>Features</p>
                </button>

                <p className='text-center text-6xl font-bold my-5'>Simplifying Living Experiences</p>

                <div className='flex justify-between mt-10'>
                    <div className='bg-white px-20 border boder-[#8A38F5]'>
                        <p className='text-2xl font-bold'>Smart Utility Vending</p>
                        <p className=''>Automate utility vending, purchase pre-paid energy meters,
                             access power purchase and consumption reports. 
                             Our platform work with any STS-compliant meter such
                              as Conlog, Momas, Hexing, Miraton Rose.</p>
                    </div>
                    <div className='bg-white px-20 border boder-purple-300 ms-10'>
                        <p className='text-2xl font-bold'>Online Bill & Utility Payments</p>
                        <p className=''>
                            Here’s a clean paraphrase:
                            Make billing, collections, and payments effortless. 
                            Ensure timely payments with built-in revenue assurance. 
                            Simplify online utility transactions while giving residents 
                            the lowest possible convenience fees.
                        </p>
                    </div>
                </div>
        

    </div>
  )
}

export default FeaturesCard