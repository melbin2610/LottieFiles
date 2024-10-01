import React from 'react';
import Image from 'next/image';
import spOne from '../../../images/sp-1.png';
import logo from '../../../images/lottie-logo.png';

const SinglePage = () => {
  return (
    <div className='p-4 xs:p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 2xl:p-32'>
      <div className='w-[90%] max-w-[1280px] mx-auto'>
        <div className='flex flex-col xs:flex-row sm:flex-row gap-2 xs:gap-2 sm:gap-4 mt-36'>
          <a href='/blog' className='flex items-center text-xs xs:text-sm sm:text-base'>
            blog <span className='ml-1'>{'>'}</span>
          </a>
          <a href='/working-with-lottie-animations' className='flex items-center text-xs xs:text-sm sm:text-base'>
            Working with Lottie Animations <span className='ml-1'>{'>'}</span>
          </a>
          <a href='/introducing-dotlottie' className='flex items-center text-xs xs:text-sm sm:text-base'>
            Introducing dotLottie: An Open-Source File Format <span className='ml-1'>{'>'}</span>
          </a>
        </div>
        <h1 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-5'>
          Introducing dotLottie: An Open-Source File Format
        </h1>
        <div className='mt-4'>
          <div className='flex text-[14px] xs:text-[12px] sm:text-[16px] flex-col xs:flex-row sm:flex-row items-center gap-1 xs:gap-2 sm:gap-4 text-gray-600'>
            <Image className='block w-6 h-6 rounded-3xl xs:w-8 xs:h-8 sm:w-10 sm:h-10' src={logo} alt='Experience Image' />
            <a href='/blog' className='flex items-center'>
              LottieFiles
            </a>
            <span className='font-bold'>.</span>
            <a href='/working-with-lottie-animations' className='flex items-center'>
              11 May 2023
            </a>
            <span className='font-bold'>.</span>
            <a href='/introducing-dotlottie' className='flex items-center'>
              4 min read
            </a>
          </div>
          <Image className='block w-full h-auto mt-16 rounded-3xl' src={spOne} alt='Experience Image' />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
