import Image from "next/image";
import web from "../../../images/Web JS.svg";
import react from "../../../images/React.svg";
import vue from "../../../images/Vue JS.svg";
import svelte from "../../../images/Svelte.svg";
import ios from "../../../images/iOS.svg";
import android from "../../../images/Android.svg";
import left from "../../../images/svgexport-10.svg"
import right from "../../../images/svgexport-11.svg"



const Spotlight = () => {
  return (
    <div className="bg-[#002a2a] p-28 "
    style={{
      backgroundImage: `url(${left.src}), url(${right.src})`,
      backgroundPosition: "left, right", // Adjust as needed
      backgroundSize: "contain, contain", // Adjust as needed
       backgroundRepeat: "no-repeat",
       
    }}
    >
      <div className="w-[90%] max-w-[1280px] mx-auto flex items-center flex-col mt-32">
        <button className="text-[20px] text-[#ffff] p-1 bg-[#006262] w-[404px] text-center rounded-[15px] font-bold max-xl:text-[16px]  max-md:text-[10px] max-sm:text-[8px] max-sm:w-auto ">
          Introducing the new dotLottie Runtimes
        </button>
        <h1 className="text-[64px] text-[#ffff] font-bold max-xl:text-[34px] max-md:text-[20px] max-sm:text-[14px] max-sm:mt-3 ">Built for Performance and</h1>
        <h1 className="text-[64px] text-[#ffff] font-bold max-xl:text-[34px] max-md:text-[20px] max-sm:text-[14px] max-sm:mt-3">Cross-Platform Consistency</h1>
        <p className="text-[20px] text-[#d6fef1b3] max-xl:text-[16px] max-md:text-[12px] max-sm:text-[10px] max-sm:mt-3">Experience enhanced animations, faster load times, and reliable</p>
        <p className="text-[20px] text-[#d6fef1b3] max-xl:text-[16px] max-md:text-[12px] max-sm:text-[10px] max-sm:mt-3">cross-platform support with the new dotLottie Runtimes.</p>
        <div className="flex space-x-4 mt-10 max-md:w-[100%] max-sl:w-[190%] ">
          <a href="/" aria-label="Web">
            <Image src={web} alt="Web JS" />
          </a>
          <a href="/" aria-label="React">
            <Image src={react} alt="React" />
          </a>
          <a href="/" aria-label="Vue">
            <Image src={vue} alt="Vue JS" />
          </a>
          <a href="/" aria-label="Svelte">
            <Image src={svelte} alt="Svelte" />
          </a>
          <a href="/" aria-label="iOS">
            <Image src={ios} alt="iOS" />
          </a>
          <a href="/" aria-label="Android">
            <Image src={android} alt="Android" />
          </a>
        </div>
        <button className="bg-[#019d91] text-white py-4 px-12 rounded-[16px] mt-8  max-md:py-2  max-md:px-3 max-sm:w-auto max-sl:w-[300%]">Visit Developer Portal</button>
      </div>
    </div>
  );
}

export default Spotlight;
