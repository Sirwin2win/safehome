import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../features/auth/authSlice";
import { useLocation } from 'react-router-dom';
import bot from '../assets/vectors/safe_home_properties_loginBot.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { PiWalletBold } from "react-icons/pi";
import { BsTools } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";





const Login = () => {
    const dispatch = useDispatch()
  const navigate = useNavigate()

    const auth = useSelector((state) => state.auth)
     const { user, loading, error } = useSelector((state) => state.auth);

// Handle redirects
const location = useLocation();
const from = location.state?.from?.pathname || '/dashboard';
     useEffect(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, [user, navigate, from]);

  
    const [form, setForm] = useState({
      email: '',
      password: '',
    })
  
    const handleChange = (e) =>
      setForm({ ...form, [e.target.name]: e.target.value })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      // console.log(form)
      dispatch(login(form))
    }
  return (
    <div className='flex justify-center my-5'>
        {/* Left Div */}
        <div className='shadow-lg p-10 border border-gray-200 rounded-lg'>
                <img src={bot} alt="safe_home_properties_bot" className='size-40 mx-auto' />
                <p className='text-[#999999] text-3xl font-lg mt-5'>Login to SafeHome</p>

                <form>
                    {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>}
                    <div className='bg-white  my-10'>
                        <input type="text"
                         placeholder='example@name.com'
                          className='bg-white shadow-lg w-full border border-gray-200 rounded-lg p-2'
                          name="email"
                          onChange={handleChange}
                          required
                          />
                    </div>
                    <div className='bg-white my-10'>
                        <input type="text" 
                        placeholder='Enter your password'
                         className='bg-white shadow-lg w-full border border-gray-200 rounded-lg p-2'
                         onChange={handleChange}
                         name="password"
                         required
                         />
                    </div>
                    <div className='my-5'>
                         <Link to='#' className="text-blue-500">Forgot your password?</Link>
                        </div>
                    <button
                    disabled={auth.status === 'loading'}
                    onClick={handleSubmit}
                     className='bg-[#223B7EC9] rounded-lg w-full text-white flex justify-evenly py-2 border-r border-r-gray-300'
                     
                     >
                        <span> {auth.status === 'loading' ? 'Login you in...' : 'Continue with Email'}</span>
                        
                        <FaArrowRightLong />
                        </button>
                        <div className='my-5 flex justify-center'>
                            <p>Don't have an account?</p>
                         <Link to='/register' className="text-blue-500">Sign Up</Link>
                        </div>
                </form>
        </div>
        {/* Right Div */}
        <div className='bg-[#223B7EC9] ms-3 rounded-lg px-8 pb-20'>
            <p className='pt-20 px-10 text-center text-3xl font-500 text-white'>Let’s help you with <span className='block'>smarter living.</span> </p>
            {/* Make Payments Div */}
            <div className='flex justify-between my-10'>
                <PiWalletBold className='size-20 text-[#223B7EC9] bg-gray-300 rounded-full p-2 shadow-lg'/>
                <div className='ms-5'>
                    <p className='text-lg font-bold text-white'>Make Payments</p>
                    <p className='text-white'>Pay online, track payment <span className='block'>status, and view your payment</span> history with ease.</p>
                </div>

            </div>
            {/* Maintenance Requests Div */}
            <div className='flex justify-between my-10'>
                <BsTools className='size-20 text-[#223B7EC9] bg-gray-300 rounded-full p-2 shadow-lg'/>
                <div className='ms-5'>
                    <p className='text-lg font-bold text-white'>Maintenance Requests</p>
                    <p className='text-white'>Submit and manage 
                        <span className='block'>maintenance requests directly </span> 
                        online.</p>
                </div>

            </div>
            {/* Renter Essentials Div */}
           <div className='flex justify-between my-10'>
                <GiFamilyHouse className='size-20 text-[#223B7EC9] bg-gray-300 rounded-full p-2 shadow-lg'/>
                <div className='ms-5'>
                    <p className='text-lg font-bold text-white'>Renter Essentials</p>
                    <p className='text-white'>Easily set up and handle your
                        <span className='block'>utilities, services, and important </span>documents.</p>
                </div>

            </div>
              {/* Renter Essentials Div End */}

        </div>

    </div>
  )
}

export default Login