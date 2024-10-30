import React from 'react';
import Image from "next/image";
import left from "../../../images/svgexport-10.svg";
import right from "../../../images/svgexport-11.svg";

const LottieFor = () => {
  return (
    <div
      className='bg-[#002b2b] p-12 md:p-36'
      style={{
        backgroundImage: `url(${left.src}), url(${right.src})`,
        backgroundPosition: "left, right",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='w-[90%] max-w-[1280px] mx-auto flex flex-col items-center gap-4'>
        <h1 className='text-[30px] md:text-[48px] text-[#ffff] font-bold text-center max-srb:text-[30px] max-sm:text-[20px]  arboria_bold'>
          Lottie for Developers
        </h1>
        <p className='text-[14px] md:text-[20px] text-[#ffff] font-thin text-center max-srb:text-[14px] max-sm:text-[13px] karla_regular'>
          Discover the Lottie ecosystem for integration and tools
        </p>
        <p className='text-[14px] md:text-[20px] text-[#ffff] font-thin text-center max-srb:text-[14px] max-sm:text-[13px] karla_regular'>
          to make the implementation of Lottie easier.
        </p>
        <button 
        className="bg-[#019d91] text-white py-2 px-4 rounded-[16px] mt-8 font-bold text-[14px] sl:py-3 sl:px-6 sl:text-[16px] 
        sz:py-4 sz:px-8 sz:text-[18px] sm:py-5 sm:px-10 sm:text-[20px] 
        md:py-6 md:px-12 md:text-[22px] srb:py-7 srb:px-14 srb:text-[22px] 
        sra:py-8 sra:px-15 sra:text-[24px] xl:py-8 xl:px-16 xl:text-[26px] karla_regular"
        aria-label="Visit Developer Portal">
        Visit Developer Portal
      </button>
        {/* <button className="bg-[#019d91] text-white py-3 px-6 rounded-[16px] mt-8 font-bold max-sm:text-[13px] max-sm:w-full karla_regular">
          Visit Developer Portal
        </button> */}
      </div>
    </div>
  );
}

export default LottieFor;
