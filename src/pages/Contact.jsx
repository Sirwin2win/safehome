import React, {useState, useEffect} from 'react'
import { FaAsterisk ,FaArrowRight } from "react-icons/fa";
import { TbSquareLetterAFilled, TbSquareLetterBFilled  } from "react-icons/tb";
import { CountryDropdown } from "react-country-region-selector";
import { addMail } from '../features/mail/mailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { number } from 'framer-motion';





const Contact = () => {
  const dispatch = useDispatch()
  const {status,error} = useSelector(state=>state.mails)
    const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    number: "",
    country: "",
    contactOption: "tour",
    message:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (val) => {
    setFormData({
      ...formData,
      country: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addMail(formData));
    console.log(formData);
  };
  useEffect(()=>{
    if(status==='succeeded'){
      setFormData(
        {
    name: "",
    organization: "",
    email: "",
    number: "",
    country: "",
    contactOption: "tour",
    message:""
  }
      )
    }
  },[status])
  return (
    <div className='px-5'>
        <p className='text-xl md:text-5xl text-center font-bold my-10'>Let’s Talk</p>
        <p className='text-center'>We’re here to help you find your perfect property. Reach out via the form or schedule a tour directly</p>

        <div className='mx-5 md"mx-50 mt-10'>
          <form onSubmit={handleSubmit}>
            <div className='relative'>
              <input type="text" 
              name='name' 
              placeholder='Full Name' 
              onChange={handleChange}
                value={formData.name}
              className='border-1 border-gray-400 w-full h-20 md:h-30 placeholder:text-3xl placeholder:p-5' />
              <FaAsterisk className='absolute bottom-15 md:bottom-26 md:left-310 left-69 bg-gray-300 p-3 rounded-full size-10' />
            </div>
            <div className='relative my-10'>
              <input type="text" 
              name='organization' 
              placeholder='Organization' 
              onChange={handleChange}
                value={formData.organization}
              className='border-1 border-gray-400 w-full h-20 md:h-30 placeholder:text-3xl placeholder:p-5' />
              <FaAsterisk className='absolute bottom-15 md:bottom-26 left-69 md:left-310 bg-gray-300 p-3 rounded-full size-10' />
            </div>
            <div className='relative'>
              <input type="text" 
              name='email' 
              placeholder='Email Address' 
              onChange={handleChange}
              value={formData.email}
              className='border-1 border-gray-400 w-full h-20 md:h-30 placeholder:text-3xl placeholder:p-5' />
              <FaAsterisk className='absolute bottom-15 md:bottom-26 left-69 md:left-310 bg-gray-300 p-3 rounded-full size-10' />
            </div>
            <div className='relative my-10'>
              <input type="text" 
              name='number' 
              placeholder='Mobile Number' 
              onChange={handleChange}
              value={formData.number}
              className='border-1 border-gray-400 w-full h-20 md:h-30 placeholder:text-3xl placeholder:p-5' />
              <FaAsterisk className='absolute bottom-15 md:bottom-26 left-69 md:left-310 bg-gray-300 p-3 rounded-full size-10' />
            </div>
            <div className='relative'>
              <p className='mb-5 text-2xl font-bold'>Select Your Region</p>
              {/* <select name="region" id="region" >
                <option value="" disabled > Nigeria</option>
              </select> */}
              <CountryDropdown
                value={formData.country}
               onChange={handleCountryChange}
               className='border-1 border-gray-400 w-full h-20 md:h-30 text-gray-500 text-3xl p-5'
                  />
              {/* <input type="text" placeholder='Full Name' className='border-1 border-gray-400 w-full h-30 placeholder:text-3xl placeholder:p-5' /> */}
              {/* <FaAsterisk className='absolute bottom-15 md:bottom-26 left-76 md:left-232 bg-gray-300 p-3 rounded-full size-10' /> */}
            </div>
            <div>
              <p className='text-3xl font-bold mt-10'>I want to</p>

                <div className='flex justify-between my-5'>
              <label className='border border-gray-500 block cursor-pointer'>
                <input type="radio" 
                name="contactOption"
            value="tour"
            checked={formData.contactOption === "tour"}
            onChange={handleChange} 
            value='tour'
                className='w-35 md:w-100 h-18 text-2xl ps-20 peer hidden'  />
                

                
          <div
            className="flex justify-between p-4 transition
                       peer-checked:border-blue-500
                       peer-checked:bg-blue-50"
          >
            <TbSquareLetterAFilled  className='ms-2 md:ms-8 md:size-8'/>
            <p>Schedule a Tour</p>
          </div>

              </label>
              <label className='border border-gray-500 block cursor-pointer'>
                <input type="radio" 
                 name="contactOption"
              value="inquiry"
              checked={formData.contactOption === "inquiry"}
              onChange={handleChange}
          
                className='w-35 md:w-100 h-18 text-2xl ps-20 peer hidden'  />
                

                
          <div
            className="flex justify-between p-4 transition
                       peer-checked:border-blue-500
                       peer-checked:bg-blue-50"
          >
            <TbSquareLetterBFilled  className='md:ms-8 md:size-8'/>
            <p>Make Inquiry</p>
          </div>

              </label>

              {/* <label className='relative'>
                <input type="text" placeholder='Make Inquiry' className='border border-gray-500 w-35 md:w-100 h-18 text-2xl md:ps-20'  />
                <TbSquareLetterBFilled className='absolute bottom-5 ms-2 md:ms-8 md:size-8' />

              </label> */}

                </div>

            </div>
            <div className='my-10'>
              <textarea name="message" 
              id="message" 
              placeholder='Type your message here' 
              onChange={handleChange}
              value={formData.message}
              className='w-full border border-gray-500 h-50 md:h-100 placeholder:text-3xl placeholder:p-5'></textarea>
            </div>
            <div className='relative mb-20'>
            <button className='bg-[#223B7EC9] w-full rounded-lg text-white text-lg py-2'>
               <span> {status === 'loading' ? 'Sending mail...' : 'Email Us'}</span>
            </button>
            <FaArrowRight className='absolute bottom-3 left-20 md:left-130 text-white' />
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contact