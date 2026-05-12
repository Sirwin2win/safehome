import React from 'react'
import { MdLogout, MdToggleOn, MdPayments   } from "react-icons/md";
import photo from '../assets/images/safe_home_profile_photo.jpg'



const ProfileSettings = () => {
  return (
    <div className='mx-5'>
        <p className='text-3xl font-bold'>Settings</p>
        <div className='flex justify-between'>
          <p className='text-[#999999]'>Manage your account settings and preferences</p>
          <div className='flex justify-evenly'>
            <MdLogout className='text-red-500 size-5 mt-1'/>
                <p className='text-red-500 ms-2'>Logout</p>
          </div>
        </div>
        <p className='text-3xl font-bold mt-5'>Profile</p>
        <p className='text-[#999999]'>Update your profile picture and personal details</p>
        {/* Profile Photo */}
        <div className='bg-[#F5F5F5] flex justify-between p-3 my-5'>
              <div className='flex justify-between'>
                <img src={photo} alt="" className='size-15 rounded-full' />
                <div className='ms-3'>
                  <p className='text-xl font-bold'>Love Ijeoma</p>
                  <p className='text-[#999999]'>Safehomes@example.com</p>
                </div>
              </div>
              {/* Remove & Upload New Photo Buttons */}
              <div className='flex justify-between'>
                <button className='bg-[#D2D2D2] px-5 text-[#000000] rounded-lg font-bold'>Remove</button>
                <button className='text-[#fff] bg-[#223B7E] px-5 rounded-lg ms-10'>Upload New Photo</button>
              </div>
          
        </div>
            {/* Bio form */}
              <div className='bg-[#F5F5F5] px-5 py-10'>
                <form>
                  <div className='flex justify-between'>
                  <div className='w-full'>
                    <label htmlFor="fullName" className='block my-3'>Full NAme</label>
                    <input type="text" placeholder='Love Ijeoma' id='fullName'
                    className='placeholder:ps-5 border border-gray-300 h-15 w-full rounded-lg' />
                  </div>
                  <div className='w-full ms-10'>
                    <label htmlFor="fullName" className='block my-3'>Role</label>
                    <input type="text" placeholder='Administrators' id='fullName'
                    className='placeholder:ps-5 border border-gray-300 h-15 w-full rounded-lg' />
                  </div>

                  </div>
                  <div className='flex justify-between'>
                  <div className='w-full'>
                    <label htmlFor="fullName" className='block my-3'>Email Address</label>
                    <input type="text" placeholder='Safehomes@example.com' id='fullName'
                    className='placeholder:ps-5 border border-gray-300 h-15 w-full rounded-lg bg-[#D9D9D9]' />
                  </div>
                  <div className='w-full ms-10'>
                    <label htmlFor="fullName" className='block my-3'>Phone Number</label>
                    <input type="text" placeholder='(234) 801 234 4567' id='fullName'
                    className='placeholder:ps-5 border border-gray-300 h-15 w-full rounded-lg' />
                  </div>

                  </div>
                </form>
              </div>
              {/* Profile form ended */}
              <p className='text-2xl font-bold mt-5'>Security</p>
              <p className='text-[#999999]'>Update your password to keep your account secure</p>
              {/* Password Change form started */}
                <div className='bg-[#F5F5F5] px-5 py-10'>
                <form>
                  <div className='flex justify-between'>
                  <div className='w-full'>
                    <label htmlFor="fullName" className='block my-3 text-[#757575]'>Current Password</label>
                    <input type="text" placeholder='Enter Current Password' id='fullName'
                    className='placeholder:ps-5 border border-gray-300 h-15 w-full rounded-lg' />
                  </div>
                  <div className='w-full ms-10'>
                    <label htmlFor="fullName" className='block my-3 text-[#757575]'>New Password</label>
                    <input type="text" placeholder='Enter New Password' id='fullName'
                    className='placeholder:ps-5 border border-gray-300 h-15 w-full rounded-lg' />
                  </div>

                  </div>
                  <div className='flex justify-between'>
                  <div className='w-115'>
                    <label htmlFor="fullName" className='block my-3 text-[#757575]'>Confirm New Password</label>
                    <input type="text" placeholder='Confirm Your New Password' id='fullName'
                    className='placeholder:ps-5 border border-gray-300 h-15 w-full rounded-lg bg-[#D9D9D9]' />
                  </div>
                  <button className='bg-[#223B7E] text-white px-10 font-bold rounded-lg mt-10'>Change Password</button>

                  </div>
                </form>
              </div>
              {/* Password Change form ended */}
              {/* Notification started */}
              <p className='text-2xl font-bold mt-5'>Notification</p>
              <p className='text-[#999999]'>Manage how and when you receive alerts</p>

              <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5+'>
                <div>
                  <p className='text-xl font-bold'>All Notifications</p>
                  <p className='text-[#999999]'>Enable or Disable notifications with a single switch</p>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div>
              {/* Notification ended */}
              {/* Notification Categories started */}
              <p className='text-2xl font-bold mt-5'>Notification Categories</p>
              <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5'>
                <div className='flex justify-evenly'>
                <MdPayments  className='text-[#223B7E] size-10 bg-[#223B7E4D] p-2 mt-2'/>
                <div className='ms-5'>
                  <p className='text-xl font-bold'>Payments</p>
                  <p className='text-[#999999]'>Reminder for upcoming rent, payment confirmations and overdue alerts</p>
                </div>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div>
              <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5'>
                <div className='flex justify-evenly'>
                <MdPayments  className='text-[#223B7E] size-10 bg-[#223B7E4D] p-2 mt-2'/>
                <div className='ms-5'>
                  <p className='text-xl font-bold'>Lease & Documents</p>
                  <p className='text-[#999999]'>Alerts for lease renewal, new documents shared and signature requests.</p>
                </div>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div>
              <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5'>
                <div className='flex justify-evenly'>
                <MdPayments  className='text-[#223B7E] size-10 bg-[#223B7E4D] p-2 mt-2'/>
                <div className='ms-5'>
                  <p className='text-xl font-bold'>Maintenance</p>
                  <p className='text-[#999999]'>Updates on service requests and completion notices.</p>
                </div>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div>
              <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5'>
                <div className='flex justify-evenly'>
                <MdPayments  className='text-[#223B7E] size-10 bg-[#223B7E4D] p-2 mt-2'/>
                <div className='ms-5'>
                  <p className='text-xl font-bold'>Community Announcements</p>
                  <p className='text-[#999999]'>General updates and announcements from the management.</p>
                </div>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div>
              {/* Notification Categories ended */}
              {/* Privacy Settings started */}
              <p className='text-2xl font-bold mt-5'>Privacy Settings</p>
              <p className='text-[#999999]'>Manage your data sharing, account settings and more</p>
              
              <div className='bg-[#F5F5F5] flex justify-between p-5 mt-5'>
                <div>
                  <p className='text-xl font-bold'>Personalized Content</p>
                  <p className='text-[#999999]'>Enable or Disable notifications with a single switch</p>
                </div>
                  <MdToggleOn  className='text-[#223B7E] size-10'/>
              </div>
              {/* Privacy Settings ended */}
    </div>
  )
}

export default ProfileSettings