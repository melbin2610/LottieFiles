import React from 'react'
import { FaLaptop, FaApple, FaAndroid, FaVectorSquare } from 'react-icons/fa';
import { SiProtonvpn } from "react-icons/si";
import figma from "../../../images/Figma5.svg"
import adob from "../../../images/Adobe After Effects4.svg"
import canva from "../../../images/canva3.webp"
import webflow from "../../../images/Webflow2.svg"
import { SiFramer } from "react-icons/si";
import Image from 'next/image';

const Integrations = () => {
  return (
    <div className='pt-40 absolute w-full mx-auto  karla_regular px-[32px] bg-[#fff] pb-[32px]'>
       <div >
        <div className='flex gap-20'>
            
            <div className='flex flex-col gap-5'>
            <h1 className='text-[#63727e]'>For Developers</h1>
                <h1>Developer Portel</h1>
                <p className='text-[#63727e]'>Explore our open-source libraries to play and control your Lottie animations on apps, websites, etc</p>

                <h1>Dotlottie Runtimes</h1>
                <p className='text-[#63727e]'>Cross-platform support and faster load times with the new dotlottie Runtimes</p>
            </div>

            <div className='border-l border-l-gray-400 p-5'>
                <h1 className='text-[#63727e]'>Designers</h1>
                <div className='flex flex-col gap-5 mt-6'>
                  <div className='flex gap-2 items-center'>
                  <span><Image src={figma}/></span>
                  <h2>Figma</h2>
                  </div>
                  <div className='flex gap-2 items-center'>
                  <span><Image src={adob}/></span>
                  <h2>Adob</h2>
                  </div>
                  <div className='flex gap-2 items-center'>
                  <span className='w-[20px]'><Image src={canva}/></span>
                  <h2>Canva</h2>
                  </div>
                  <div className='flex gap-2 items-center'>
                  <span><Image src={webflow}/></span>
                  <h2>Webflow</h2>
                  </div>
                  <div className='flex gap-2 items-center'>
                  <span><SiFramer/></span>
                  <h2>Framer</h2>
                  </div>
                  <div className='flex gap-2 items-center'>
                  <span><SiProtonvpn /></span>
                  <h2>Protopie</h2>
                  </div>
                </div>
                
            </div>
            <div className='flex flex-col gap-5 border-l border-l-gray-400 p-5'>
                <h1 className='text-[#63727e]'>Tools</h1>

                <h2>Web Player</h2>
                <p className='text-[#63727e]'>Ship Lottie animations on your websute in just a few clicks</p>

                <h2>Lottie to dotLOttie</h2>
                <p className='text-[#63727e]'>Convert Lottie JSON format in seconds</p>
                
                <h3>Explore all tools</h3>
            </div>
            <div className='flex flex-col gap-5 mt-[40px]'>
                <h1>SVG to lottie</h1>
                <p className='text-[#63727e]'>Convert static icons and illustrations into Lottie animations</p>

                <h2>JSON Editor</h2>
                <p className='text-[#63727e]'>Edit lottie animations easily by tweaking their JSON data</p>
                                         
                <h2>Optimize Lottie</h2>
                <p className='text-[#63727e]'>Upload and optimize your lottie animations for faster loading</p>                          
            </div>

            <div className='flex flex-col gap-5 border-l border-l-gray-400 p-5'>
      <h1 className='text-[#63727e]'>dotLottie</h1>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaLaptop style={{ marginRight: '8px' }} />
        <h2>dotLottie Web</h2>
      </div>
      <p className='text-[#63727e]'>.lottie player for web</p>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaApple style={{ marginRight: '8px' }} />
        <h2>dotLottie iOS</h2>
      </div>
      <p className='text-[#63727e]'>.lottie player for iOS</p>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaAndroid style={{ marginRight: '8px' }} />
        <h2>dotLottie Android</h2>
      </div>
      <p className='text-[#63727e]'>.lottie player for Android</p>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaVectorSquare style={{ marginRight: '8px' }} />
        <h2>ThorVG</h2>
      </div>
      <p className='text-[#63727e]'>Thor Vector Graphics is a lightweight portable library</p>
    </div>
        </div>
       </div>
    </div>
  )
}

export default Integrations