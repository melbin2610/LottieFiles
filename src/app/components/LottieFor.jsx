import React from 'react'
import Image from "next/image";
import left from "../../../images/svgexport-10.svg"
import right from "../../../images/svgexport-11.svg"

const LottieFor = () => {
  return (
    <div className='bg-[#002b2b]  p-36 '
    style={{
      backgroundImage: `url(${left.src}), url(${right.src})`,
      backgroundPosition: "left, right", // Adjust as needed
      backgroundSize: "", // Adjust as needed
       backgroundRepeat: "no-repeat"
      
    }}
    >
        
        <div className='w-[90%] max-w-[1280px] mx-auto flex flex-col items-center gap-3 '>
           <h1 className='text-[48px] text-[#ffff] font-bold max-srb:text-[30px]'>Lottie for developers</h1>
           <p className='text-[20px] text-[#ffff] font-thin max-srb:text-[14px]'>Discover Lottie ecosystem for integration and tools</p>
           <p className='text-[20px] text-[#ffff] font-thin max-srb:text-[14px]'>to make implementation of Lottie easier</p>
           <button className="bg-[#019d91] text-white py-4 px-12 rounded-[16px] mt-8 font-[20px] font-bold">Visit Developer Portal</button>
        </div>
    </div>
  )
}

export default LottieFor