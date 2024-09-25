import React from 'react'
import Image from "next/image";

const LottieFor = () => {
  return (
    <div className='bg-[#002b2b] p-36'>
        <div className='w-[90%] max-w-[1280px] mx-auto flex flex-col items-center gap-3'>
           <h1 className='text-[48px] text-[#ffff] font-bold'>Lottie for developers</h1>
           <p className='text-[20px] text-[#ffff] font-thin'>Discover Lottie ecosystem for integration and tools</p>
           <p className='text-[20px] text-[#ffff] font-thin'>to make implementation of Lottie easier</p>
           <button className="bg-[#019d91] text-white py-4 px-12 rounded-[16px] mt-8 font-[20px] font-bold">Visit Developer Portal</button>
        </div>
    </div>
  )
}

export default LottieFor