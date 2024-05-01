import React from 'react'
import { GrRestaurant } from 'react-icons/gr'

const Contact = () => {
    return (
        <div className="flex justify-center items-center w-[100%] h-[100vh]  bg-center bg-cover relative  pb-[20rem]  bg-[url('/images/Rectangle.png')]">
      <div className='max-w-md w-full h-[500px] mx-auto bg-white rounded-lg shadow-md p-12 mt-[20rem] '>
        <h2 className='text-3xl text-center text-black font-bold mb-6 '>join our waitlist</h2>
        <form action="">
            <div className='mb-4 mt-12'>
                <label htmlFor="" className='block text-black text-sm font-semibold mb-2 '>First Name</label>
                <input placeholder=' First Name' className='w-full px-3 py-2 border rounded-lg  focus:outline-none focus:border-blue-500'
                required type="text" />
            </div>
            <div className='mb-4 mt-4' >
                <label htmlFor="" className='block text-black text-sm font-semibold mb-2 '>Last Name</label>
                <input type="email" placeholder='Last Name' className='w-full px-3 py-2 border rounded-lg focus:border-blue-500'
                required />
            </div>
            <div className='mb-4 mt-4' >
                <label htmlFor="" className='block text-black text-sm font-semibold mb-2 '>Please enter your email address </label>
                <input type="email" placeholder='Please enter your email address' className='w-full px-3 py-2 border rounded-lg outline-8 focus:border-blue-500'
                required />
            </div>
            <div className='flex justify-center mt-8'>
                <button type='submit' className='bg-[#2B88D9] text-black font-semibold px-4 py-2 rounded-lg w-[100%] focus:outline-white '>Submit</button>
            </div>
            
        </form>
      </div>
       </div>
    
    )
}

export default Contact