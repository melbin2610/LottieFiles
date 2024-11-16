"use client";
import Image from "next/image";
import Link from "next/link";
import web from "../../../images/Web JS.svg";
import react from "../../../images/React.svg";
import vue from "../../../images/Vue JS.svg";
import svelte from "../../../images/Svelte.svg";
import ios from "../../../images/iOS.svg";
import android from "../../../images/Android.svg";
import left from "../../../images/sp-left.png";
import right from "../../../images/sp-right.png";
// import Lottie from "lottie-react";
// import crakle from "../../../Animation - 1731500643903.json"

const Spotlight = () => {
  return (
    <div
      className="bg-[#002b2b] p-6 sm:p-10 md:p-14 lg:p-20 xl:p-28 "
      style={{
        backgroundImage: `url(${left.src}), url(${right.src})`,
        backgroundPosition: "left 105px, right 105px",
        backgroundSize: "contain, contain",
        backgroundRepeat: "no-repeat",
      }}
   
    >
       {/* <div className="w-[100px]  mt-[400px] absolute">
         <Lottie animationData={crakle}/>
       </div> */}
      
      
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center mt-8 md:mt-12 lg:mt-16 xl:mt-20 ">
      <button className="text-[20px] text-[#ffff] mt-[70px] p-[2px]  bg-[#006262] karla_bold w-full max-w-[404px]  text-center rounded-[50px] font-extrabold border-[1px] border-solid border-green-500 flex items-center justify-center gap-2 hover:bg-[#005454] hover:border-[#00b8a9] max-sm:max-w-[100%] max-sm:text-[16px]  max-sl:text-[14px]">
  Introducing the new dotLottie Runtimes
</button>


        <h1 className="text-[64px] text-[#ffff] arboria_bold text-center font-bold leading-[70px] mt-3 max-sra:text-[48px] max-sra:leading-[50px] max-sm:text-[36px] max-sm:mt-2 max-sra:mt-4 max-sz:text-[27px] max-sl:text-[33px]">
          Built for Performance and<br className=""/>Cross-Platform Consistency
        </h1>
        {/* <h1 className="text-2xl sl:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#ffff] arboria_bold font-bold mt-4 text-center max-sl:text-[25px] ">
          Cross-Platform Consistency
        </h1> */}
        <p className="text-base sl:text-lg md:text-xl text-[#d6fef1b3] mt-3 text-center karla_regular">
          Experience enhanced animations, faster load times, and reliable
        </p>
        <p className="text-base sl:text-lg md:text-xl text-[#d6fef1b3] mt-1 text-center karla_regular">
          cross-platform support with the new dotLottie Runtimes.
        </p>
        <div className="flex space-x-4 mt-6 justify-center karla_regular max-zr:flex-wrap ">
  {[
    { src: web, alt: "Web JS", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-web/" },
    { src: react, alt: "React", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-react/" },
    { src: vue, alt: "Vue JS", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-vue/" },
    { src: svelte, alt: "Svelte", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-wc/" },
    { src: ios, alt: "iOS", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-ios/" },
    { src: android, alt: "Android", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-android/" },
  ].map(({ src, alt, href }) => (
    <Link key={alt} href={href} target="_blank" rel="noopener noreferrer" aria-label={alt} className="flex items-center justify-center">
      <Image 
        src={src} 
        alt={alt} 
        className="max-w-[60px] zr:max-w-[30px] sl:max-w-[40px] md:max-w-[80px] lg:max-w-[90px] xl:max-w-[100px] transition-transform duration-300 transform hover:scale-110 hover:text-black hover:shadow-xl"
      />
    </Link>
  ))}
</div>

        <button 
        className="bg-[#019d91] text-white py-2 px-4 rounded-[12px] mt-8 font-bold text-[14px] sl:py-3 sl:px-6 sl:text-[16px] 
        sz:py-4 sz:px-8 sz:text-[13px] sm:py-5 sm:px-10 sm:text-[14px] 
        md:py-6 md:text-[15px]  srb:text-[16px] 
         sra:text-[18px] xl:py-4 xl:px-12 xl:text-[20px] karla_regular
         hover:bg-[#00ddb3] delay-300 max-xl:w-[100%]"
        aria-label="Visit Developer Portal">
        Visit Developer Portal
      </button>

       
      </div>
    </div>
  );
};

export default Spotlight;
