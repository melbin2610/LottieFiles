import React from 'react';
import Image from "next/image";
import left from "../../../images/svgexport-10.svg";
import right from "../../../images/svgexport-11.svg";

const LottieFor = () => {
  return (
    <div
      className='bg-[#002b2b] p-12 md:p-36 max-sz:px-0'
      style={{
        backgroundImage: `url(${left.src}), url(${right.src})`,
        backgroundPosition: "left, right",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='w-[90%] max-w-[1280px] mx-auto flex flex-col items-center gap-4'>
        <h1 className='text-[48px]  text-[#ffff] font-bold text-center arboria_bold max-srb:text-[36px] max-sz:text-[24px]'>
          Lottie for Developers
        </h1>
        <p className='text-[20px]  text-[#ffff] font-thin text-center  karla_regular max-srb:text-[16px] '>
          Discover the Lottie ecosystem for integration and tools
        </p>
        <p className='text-[20px] mt-[-15px]  text-[#ffff] font-thin text-center  karla_regular max-srb:text-[16px]'>
          to make the implementation of Lottie easier.
        </p>
        <button 
        className="bg-[#019d91] text-white py-2 px-4 rounded-[16px] mt-8 font-bold text-[14px] sl:py-3 sl:px-6 sl:text-[18px] 
        sz:py-4 sz:px-8 sz:text-[13px] sm:py-5 sm:px-10 sm:text-[14px] 
        md:py-6 md:text-[15px]  srb:text-[16px] 
         sra:text-[18px] xl:py-4 xl:px-12 xl:text-[20px] karla_regular hover:bg-[#00ddb3] delay-300 max-sl:w-[100%]"
        aria-label="Visit Developer Portal">
        Visit Developer Portal
      </button>
        
      </div>
    </div>
  );
}

export default LottieFor;
