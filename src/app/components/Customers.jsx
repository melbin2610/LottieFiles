import React from "react";
import Image from "next/image";
import c1 from "../../../images/c1.png";
import c2 from "../../../images/c2.png";
import c3 from "../../../images/c3.png";
import c4 from "../../../images/c4.png";
import c5 from "../../../images/c5.png";
import c6 from "../../../images/c6.png";
import c7 from "../../../images/c7.png";
import { BsArrowRight } from "react-icons/bs";


function Customers() {
  return (
    <div className="pt-40 absolute w-full mx-auto  karla_regular px-[32px] bg-[#fff] pb-[32px] max-xl:hidden cursor-pointer">
      <div className="flex gap-3">
        <div>
          <h1 className="text-[#63727e]">Case Studies</h1>
          <div className="flex flex-col gap-5">
          <div className="mt-10">
            <Image className="w-[100%] block" src={c1} alt="c1" />
          </div>

          <h2>DisneyNow</h2>
          <p className="text-[#63727e]">How DisneyNow crafts a dynamic app experiance</p>
          <h5 className=" text-[#019d91] mt-2 karla_regular flex items-center gap-3  cursor-pointer font-extrabold">See all case studies
          <span><BsArrowRight /></span>
          </h5>
          </div>
         
        </div>
        <div className="mt-[64px] flex flex-col gap-5">
        
          <div className="">
            <Image className="w-[100%] block" src={c6} alt="c2" />
          </div>
          <h2>Gojek</h2>
          <p className="text-[#63727e]">Warm and personal user experience at Gojek</p>
        </div>
        <div className="mt-[64px] flex flex-col gap-5">
          
          <div className="">
            <Image className="w-[100%] block" src={c7} alt="c3" />
          </div>
          <h2>Instacart</h2>
          <p className="text-[#63727e]">How instacacrt users motion to tell a story</p>
        </div>
        <div className="flex flex-col gap-5">
        
          <div className="mt-[64px]">
            <Image className="w-[100%] block" src={c2} alt="c4" />
          </div>
          <h2>DisneyNow</h2>
          <p className="text-[#63727e]">How DisneyNow crafts a dynamic app experiance</p>
        </div>
        <div className="border-l border-l-gray-400 p-5">
          <h1 className="text-[#63727e]">Oraganizations</h1>
          <div className="flex flex-col gap-5">
          <div className="mt-5 w-[289px]">
            <Image className="w-[100%] block" src={c5} alt="c5" />
          </div>
          <h2>Enterprice</h2>
          <p className="text-[#63727e]">Your teams secure,scalable motion design platform to create, collaborate and implement animations</p>
          </div>
          
        </div>
        <div className="border-l border-l-gray-400 p-5">
          <h1 className="text-[#63727e]">Inspiration</h1>

          <div className="flex flex-col gap-5">
          <h2 className="mt-10">Use Cases</h2>
          <p className="text-[#63727e]">
            Discover and get inspired by the many use cases of motion design
          </p>

          <h1>Built with lottie</h1>
          <p className="text-[#63727e]">
            check out these websites,apps and more that were all built with
            lottie
          </p>

          <h1>Customer stories</h1>
          <p className="text-[#63727e]">
            Learn how our customers brought their designs to life with motion
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Customers;
