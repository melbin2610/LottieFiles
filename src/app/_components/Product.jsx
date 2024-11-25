import React from "react";
import Image from "next/image";
import p1 from "../../../images/p1.png";
import p2 from "../../../images/p2.png";
import { BsArrowRight } from "react-icons/bs";

const Product = ({setHoveredItem}) => {
  return (
    <div className="mt-[104px] fixed left-0 top-0 w-full mx-auto  karla_regular px-[32px] bg-[#fff] pb-[32px] max-xl:hidden  cursor-pointer"  onMouseLeave={() => setHoveredItem("")}>
      <div>
        <div className="flex  gap-8 mt-8">
          <div>
            <h1 className="text-[#63727e] font-semibold ml-2">Platform</h1>
            <div className="p-2 rounded-3xl flex flex-col gap-5 hover:bg-slate-50 hover:text-[#019d91]">
              <h1 className="text-[16px] mt-5 font-semibold">
                LottieFiles Platform
              </h1>
              <h2 className="text-[#63727e]">
                Designed for dreamers,builts for teams
              </h2>
              <Image className="" src={p1} alt="p1" />
            </div>
          </div>
          <div>
            <div className="p-2 rounded-3xl flex flex-col gap-5 hover:bg-slate-50 hover:text-[#019d91] mt-11">
              <h1 className="text-[16px] font-semibold">Lottie Creator</h1>
              <h2 className="text-[#63727e]">Create Lottie Animation easily</h2>
              <Image className="" src={p2} alt="p2" />
            </div>
          </div>
          <div className="border-l border-l-gray-400 p-5">
          
            <div className="flex flex-col gap-4">
                  <h1 className="text-[#63727e] font-semibold ml-2 ">Animations</h1>
              <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
                <h2 className="text-[16px] mt-5 font-semibold">
                  Free Animations
                </h2>
                <p className="text-[#63727e]">
                  Access the world's largest collection of free animations
                </p>
              </div>
              <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
                <h1 className="text-[16px] font-semibold">
                  Premium Animations
                </h1>
                <p className="text-[#63727e]">
                  Give your design projects anew look with 400,000+ premiun
                  lottie animations
                </p>
              </div>
              <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
                <h1 className="font-semibold">marketplace</h1>
                <p className="text-[#63727e]">
                  Buy and sell premium Lottie animations
                </p>
              </div>
              <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
                <h1 className="text-[16px] font-semibold">Hire Animators</h1>
                <p className="text-[#63727e]">
                  find and hire animators for custom Lottie animations
                </p>
              </div>
            </div>
          </div>
          <div className="border-l border-l-gray-400 p-5">
            <h1 className="text-[#63727e] font-semibold ml-2">
              LottieFiles Plugins
            </h1>
            <div className="flex flex-col gap-4">
                <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91] mt-2">
                <h2 className="text-[16px] mt-5 font-semibold">
                LottieFiles for Webflow
              </h2>
              <p className="text-[#63727e]">
                Add motion magic to your Webflow sites
              </p>
                </div>
             <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
             <h1 className="text-[16px] font-semibold">
                LottieFiles for Canva
              </h1>
              <p className="text-[#63727e]">
                Add free, ready-to-use Lottie animations into your Canva
                projects
              </p>
             </div>
             <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
             <h1 className="font-semibold">LottieFiles for After Effects</h1>
              <p className="text-[#63727e]">
                Export Lottie animations from After Effects instantly
              </p>
             </div>
             <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
             <h1 className="text-[16px] font-semibold">
                LottieFiles for Figma
              </h1>
              <p className="text-[#63727e]">
                Create single or multiple-frame animations and insert your
                private animation to Figma
              </p>
             </div>
              
              
              
             <h5 className="text-[#019d91] mt-2 karla_regular flex items-center gap-3 cursor-pointer font-extrabold ml-4 hover:text-[#52d7bc]">
  Explore All Plugin
  <span>
    <BsArrowRight />
  </span>
</h5>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Product;
