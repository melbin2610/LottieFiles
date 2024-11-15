import React from 'react'
import Image from 'next/image'
import p1 from "../../../images/p1.png"
import p2 from "../../../images/p2.png"
import { BsArrowRight } from "react-icons/bs";

const Product = () => {
  return (
    <div className='pt-40 absolute w-full mx-auto  karla_regular px-[32px] bg-[#fff] pb-[32px] max-xl:hidden  cursor-pointer'>
        <div>
         
            <div className='flex  gap-8'>
                <div className='flex  flex-col gap-3'>
                <h1 className='text-[#63727e]'>Platform</h1>
                    <h1 className='text-[16px] mt-5'>LottieFiles Platform</h1>
                    <h2 className='text-[#63727e]'>Designed for dreamers,builts for teams</h2>
                    <Image className='' src={p1} alt='p1'/>
                </div>
                <div className='flex flex-col gap-3 mt-[54px]'>
                    <h1 className='text-[16px] '>Lottie Creator</h1>
                    <h2 className='text-[#63727e]'>Create Lottie Animation easily</h2>
                    <Image className='' src={p2} alt='p2'/>
                </div>
                <div className='border-l border-l-gray-400 p-5'>
                    <h1 className='text-[#63727e] '>Animations</h1>
                    <div className='flex flex-col gap-7'>
                    <h2 className='text-[16px] mt-5'>Free Animations</h2>
                    <p className='text-[#63727e]'>Access the world's largest collection of free animations</p>
                    <h1 className='text-[16px]'>Premium Animations</h1>
                    <p className='text-[#63727e]'>Give your design projects anew look with 400,000+ premiun lottie animations</p>
                    <h1 className='V'>marketplace</h1>
                    <p className='text-[#63727e]'>Buy and sell premium Lottie animations</p>
                    <h1 className='text-[16px]'>Hire Animators</h1>
                    <p className='text-[#63727e]'>find and hire animators  for custom Lottie animations</p> 
                    </div>
                    
                </div>
                <div className='border-l border-l-gray-400 p-5'>
                    <h1 className='text-[#63727e] '>Animations</h1>
                    <div className='flex flex-col gap-7'>
                    <h2 className='text-[16px] mt-5'>Free Animations</h2>
                    <p className='text-[#63727e]'>Access the world's largest collection of free animations</p>
                    <h1 className='text-[16px]'>Premium Animations</h1>
                    <p className='text-[#63727e]'>Give your design projects anew look with 400,000+ premiun lottie animations</p>
                    <h1 className='V'>marketplace</h1>
                    <p className='text-[#63727e]'>Buy and sell premium Lottie animations</p>
                    <h1 className='text-[16px]'>Hire Animators</h1>
                    <p className='text-[#63727e]'>find and hire animators  for custom Lottie animations</p> 
                    <h5 className=" text-[#019d91] mt-2 karla_regular flex items-center gap-3  cursor-pointer font-extrabold">Explore All Plugin
          <span><BsArrowRight /></span>
          </h5>

                    </div>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Product