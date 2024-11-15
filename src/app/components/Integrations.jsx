import React from "react";
import { FaLaptop, FaApple, FaAndroid, FaVectorSquare } from "react-icons/fa";
import { SiProtonvpn } from "react-icons/si";
import figma from "../../../images/Figma5.svg";
import adob from "../../../images/Adobe After Effects4.svg";
import canva from "../../../images/canva3.webp";
import webflow from "../../../images/Webflow2.svg";
import { SiFramer } from "react-icons/si";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Integrations = () => {
  return (
    <div className="mt-[104px] fixed left-0 top-0   karla_regular px-[32px] bg-[#fff] pb-[32px] max-xl:hidden  cursor-pointer">
      <div className="mt-8">
        <div className="flex gap-2">
          <div className="flex flex-col gap-5">
            <h1 className="text-[#63727e] font-semibold ml-2">
              For Developers
            </h1>
            <div className="p-2 rounded-3xl flex flex-col gap-5 hover:bg-slate-50 hover:text-[#019d91]">
              <h1 className="font-semibold">Developer Portel</h1>
              <p className="text-[#63727e]">
                Explore our open-source libraries to play and control your
                Lottie animations on apps, websites, etc
              </p>
            </div>
            <div className="p-2 rounded-3xl flex flex-col gap-5 hover:bg-slate-50 hover:text-[#019d91]">
              <h1 className="font-semibold">Dotlottie Runtimes</h1>
              <p className="text-[#63727e]">
                Cross-platform support and faster load times with the new
                dotlottie Runtimes
              </p>
            </div>
          </div>

          <div className="border-l border-l-gray-400 p-5 w-[17%]">
            <h1 className="text-[#63727e] font-semibold ml-3">Designers</h1>
            <div className="text-[20px] flex flex-col gap-2 mt-6">
              <div className=" gap-2 items-center p-3 rounded-xl flex   hover:bg-slate-50 hover:text-[#019d91]">
                <span>
                  <Image src={figma} />
                </span>
                <h2 className="font-semibold">Figma</h2>
              </div>
              <div className="gap-2 items-center p-3 rounded-xl flex   hover:bg-slate-50 hover:text-[#019d91]">
                <span>
                  <Image src={adob} />
                </span>
                <h2 className="font-semibold">Adob</h2>
              </div>
              <div className="gap-2 items-center p-3 rounded-xl flex   hover:bg-slate-50 hover:text-[#019d91]">
                <span className="w-[20px]">
                  <Image src={canva} />
                </span>
                <h2 className="font-semibold">Canva</h2>
              </div>
              <div className="gap-2 items-center p-3 rounded-xl flex   hover:bg-slate-50 hover:text-[#019d91]">
                <span>
                  <Image src={webflow} />
                </span>
                <h2 className="font-semibold">Webflow</h2>
              </div>
              <div className="gap-2 items-center p-3 rounded-xl flex   hover:bg-slate-50 hover:text-[#019d91]">
                <span>
                  <SiFramer />
                </span>
                <h2 className="font-semibold">Framer</h2>
              </div>
              <div className="gap-2 items-center p-3 rounded-xl flex   hover:bg-slate-50 hover:text-[#019d91]">
                <span>
                  <SiProtonvpn />
                </span>
                <h2 className="font-semibold">Protopie</h2>
              </div>
              <h5 className="text-[16px] text-[#019d91] mt-2 karla_regular flex items-center gap-3 cursor-pointer font-extrabold ml-4 hover:text-[#52d7bc]">
                Explore All
                <span>
                  <BsArrowRight />
                </span>
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-l border-l-gray-400 p-5">
            <h1 className="text-[#63727e] font-semibold ml-3">Tools</h1>
            <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
              <h2 className="font-semibold">Web Player</h2>
              <p className="text-[#63727e]">
                Ship Lottie animations on your websute in just a few clicks
              </p>
            </div>
            <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
              <h2 className="font-semibold">Lottie to GIF</h2>
              <p className="text-[#63727e]">
              Seamlessly transform Lottie animations into high-quality GIFs
              </p>
            </div>
            <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
              <h2 className="font-semibold">Lottie to dotLOttie</h2>
              <p className="text-[#63727e]">
                Convert Lottie JSON format in seconds
              </p>
            </div>

            <h5 className=" text-[#019d91]  karla_regular flex items-center gap-3 cursor-pointer font-extrabold ml-4 hover:text-[#52d7bc] mt-[35px]">
              Explore all tools
              <span>
                <BsArrowRight />
              </span>
            </h5>
          </div>
          <div className="flex flex-col gap-5 mt-[40px]">
            <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
            <h1 className="font-semibold">SVG to lottie</h1>
            <p className="text-[#63727e]">
              Convert static icons and illustrations into Lottie animations
            </p>
            </div>
            
             <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
             <h2 className="font-semibold">JSON Editor</h2>
            <p className="text-[#63727e]">
              Edit lottie animations easily by tweaking their JSON data
            </p>
             </div>
            <div className="p-3 rounded-xl flex flex-col gap-2 hover:bg-slate-50 hover:text-[#019d91]">
            <h2 className="font-semibold">Optimize Lottie</h2>
            <p className="text-[#63727e]">
              Upload and optimize your lottie animations for faster loading
            </p>
            </div>
            
          </div>

          <div className="flex flex-col gap-5 border-l border-l-gray-400 p-5">
            <h1 className="text-[#63727e] font-semibold ml-3">dotLottie</h1>

            <div style={{ display: "flex", alignItems: "center" }} className="p-3 rounded-xl  gap-2 hover:bg-slate-50 hover:text-[#019d91]">
              <FaLaptop style={{ marginRight: "8px" }} className="text-[40px]" />
              <div>
              <h2 className="font-semibold">dotLottie Web</h2>
              <p className="text-[#63727e]">.lottie player for web</p>
              </div>
           
            </div>
            

            <div style={{ display: "flex", alignItems: "center" }} className="p-3 rounded-xl  gap-2 hover:bg-slate-50 hover:text-[#019d91]">
              <FaApple style={{ marginRight: "8px" }} className="text-[40px]"/>
              <div>
              <h2 className="font-semibold">dotLottie iOS</h2>
              <p className="text-[#63727e]">.lottie player for iOS</p>
              </div>
              
            </div>
            

            <div style={{ display: "flex", alignItems: "center" }} className="p-3 rounded-xl  gap-2 hover:bg-slate-50 hover:text-[#019d91]">
              <FaAndroid style={{ marginRight: "8px" }} className="text-[40px]" />
              <div>
              <h2 className="font-semibold">dotLottie Android</h2>
              <p className="text-[#63727e]">.lottie player for Android</p>
              </div>
             
            </div>
           

            <div style={{ display: "flex", alignItems: "center" }} className="p-3 rounded-xl  gap-2 hover:bg-slate-50 hover:text-[#019d91]">
              <FaVectorSquare style={{ marginRight: "8px" }} className="text-[50px]" />
              <div>
              <h2 className="font-semibold">ThorVG</h2>
              <p className="text-[#63727e]">
              Thor Vector Graphics is a lightweight portable library
            </p>
              </div>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
