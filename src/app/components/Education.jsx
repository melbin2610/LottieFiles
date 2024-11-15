import React from "react";
import img1 from "../../../images/11.png";
import img2 from "../../../images/22.png";
import img3 from "../../../images/33.png";
import img4 from "../../../images/44.jpg";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Education = () => {
  return (
    <div className="pt-40 absolute w-full mx-auto  karla_regular px-[32px] bg-[#fff] pb-[32px] max-xl:hidden  cursor-pointer">
        <div className="flex gap-5">
        <div>
        <h1 className="mt-4 text-[#63727e] font-semibold">Blog</h1>
        <div className="flex gap-5 mt-11">
            <div className="flex flex-col gap-5 ">
            <div className="w-[280px] h-[200px]">
            <Image className="w-[100%] h-[100%] block" src={img1} />
          </div>
          <p className="text-[#63727e]">
              Resolution of Security Incident with @lottiefiles/lottie-player
              Package
            </p> 
            </div>
         
           <div >
           <div className="w-[280px] h-[200px]">
            <Image className="w-[100%]  h-[100%] block" src={img2} />
          </div>
          <p className="mt-5 text-[#63727e]">
              Choosing The Perfect Colour Palette For Your Website: 4...
            </p>
           </div>
          
        </div>
        <div>
         
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="mt-8 text-[#63727e]">More blogs</h1>
          <h2 className="font-semibold hover:text-[#019d91]">10 CEOs Share Their Thoughts on Low Code/No Code Development</h2>
          <h2 className="font-semibold hover:text-[#019d91]">5 Ways to Make Your Framer Website Pop with Lottie Animations</h2>
          <h2 className="font-semibold hover:text-[#019d91]">The Lottie Advantage</h2>
          <h5 className=" text-[#019d91] mt-2 karla_regular flex items-center gap-3  cursor-pointer font-extrabold hover:text-[#019d91]">
            See all
            <span className="hover:text-[#019d91]">
              <BsArrowRight />
            </span>
          </h5>
        </div>
      </div>
      <div>
        <h1 className="mt-5 text-[#63727e] font-semibold">Education Center</h1>
        <div className="flex gap-5 mt-11 ">
            <div>
            <div className="w-[280px] h-[200px]">
            <Image className="w-[100%] h-[100%] block" src={img3} />
          </div>
          <p className="mt-5 text-[#63727e]">
              
             Overview guide on LottieFiles for Adobe After Effects
            </p> 
            </div>
         
           <div className="flex flex-col gap-5">
           <div className="w-[280px] h-[200px]">
            <Image className="w-[100%]  h-[100%] block" src={img4} />
          </div>
          <p className="text-[#63727e]">
             
           Get started with Lottie Creator in 2 minutes
            </p>
           </div>
          
        </div>
        <div>
         
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="mt-8 text-[#63727e]">More education</h1>
          <h2 className="font-semibold hover:text-[#019d91]">Add and edit keyframes with only a few clicks</h2>
          <h2 className="font-semibold hover:text-[#019d91]">Using the layer system to your advantage</h2>
          <h2 className="font-semibold hover:text-[#019d91]">Import any SVG file and add keyframes to it</h2>
          <h5 className=" text-[#019d91] mt-2 karla_regular flex items-center gap-3  cursor-pointer font-extrabold">
            See all
            <span>
              <BsArrowRight />
            </span>
          </h5>
        </div>
      </div>

     
      <div className='border-l border-l-gray-400 p-5'>
                    <h1 className='text-[#63727e] font-semibold '>Community</h1>
                    <div className='flex flex-col gap-7'>
                    <h2 className='text-[16px] mt-5 font-semibold hover:text-[#019d91]'>Community</h2>
                    <p className='text-[#63727e]'>Connect with fellow Lottie lovers at our fun events</p>
                    <h1 className='text-[16px] font-semibold hover:text-[#019d91]'>Lottie Evangelists</h1>
                    <p className='text-[#63727e]'>Create your own Lottie Community and share the love of motion</p>
                    <h1 className='font-semibold hover:text-[#019d91]'>Upcoming Events</h1>
                    <p className='text-[#63727e]'>Get together with Lottie creators, designers and developers</p>
                    
                    </div>
                    
                </div>
                <div className='border-l border-l-gray-400 p-5'>
                    <h1 className='text-[#63727e] font-semibold  '>Get support</h1>
                    <div className='flex flex-col gap-7'>
                    <h2 className='text-[16px] mt-5 font-semibold hover:text-[#019d91]'>Forum</h2>
                    <p className='text-[#63727e]'>A friendly space to discuss all things Lottie and motion</p>
                    <h1 className='text-[16px] font-semibold hover:text-[#019d91]'>FAQ & Support</h1>
                    <p className='text-[#63727e]'>Helpful guides along with answers to your most common questions</p>
                   
                    </div>
                    
                </div>
        </div>
     
    </div>
  );
};

export default Education;
