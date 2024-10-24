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
        <h1 className='text-[30px] md:text-[48px] text-[#ffff] font-bold text-center max-srb:text-[30px] max-sm:text-[20px]'>
          Lottie for Developers
        </h1>
        <p className='text-[14px] md:text-[20px] text-[#ffff] font-thin text-center max-srb:text-[14px] max-sm:text-[13px]'>
          Discover the Lottie ecosystem for integration and tools
        </p>
        <p className='text-[14px] md:text-[20px] text-[#ffff] font-thin text-center max-srb:text-[14px] max-sm:text-[13px]'>
          to make the implementation of Lottie easier.
        </p>
        <button className="bg-[#019d91] text-white py-3 px-6 rounded-[16px] mt-8 font-bold max-sm:text-[13px] max-sm:w-full">
          Visit Developer Portal
        </button>
      </div>
    </div>
  );
}

export default LottieFor;
