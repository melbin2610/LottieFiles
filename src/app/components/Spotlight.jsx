import Image from "next/image";
import web from "../../../images/Web JS.svg";
import react from "../../../images/React.svg";
import vue from "../../../images/Vue JS.svg";
import svelte from "../../../images/Svelte.svg";
import ios from "../../../images/iOS.svg";
import android from "../../../images/Android.svg";
import left from "../../../images/svgexport-10.svg";
import right from "../../../images/svgexport-11.svg";

const Spotlight = () => {
  return (
    <div
      className="bg-[#002a2a] p-6 sm:p-10 md:p-14 lg:p-20 xl:p-28"
      style={{
        backgroundImage: `url(${left.src}), url(${right.src})`,
        backgroundPosition: "left, right",
        backgroundSize: "contain, contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <button className="text-base text-[#ffff] mt-9 sm:text-lg md:text-xl p-2 bg-[#006262] w-full max-w-[404px] text-center rounded-[15px] font-bold">
          Introducing the new dotLottie Runtimes
        </button>
        <h1 className="text-2xl sl:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#ffff] font-bold mt-4 text-center">
          Built for Performance and
        </h1>
        <h1 className="text-2xl sl:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#ffff] font-bold mt-4 text-center">
          Cross-Platform Consistency
        </h1>
        <p className="text-base sl:text-lg md:text-xl text-[#d6fef1b3] mt-3 text-center">
          Experience enhanced animations, faster load times, and reliable
        </p>
        <p className="text-base sl:text-lg md:text-xl text-[#d6fef1b3] mt-1 text-center">
          cross-platform support with the new dotLottie Runtimes.
        </p>
        <div className="flex space-x-4 mt-6 flex-wrap justify-center">
          {[
            { src: web, alt: "Web JS" },
            { src: react, alt: "React" },
            { src: vue, alt: "Vue JS" },
            { src: svelte, alt: "Svelte" },
            { src: ios, alt: "iOS" },
            { src: android, alt: "Android" },
          ].map((img) => (
            <a key={img.alt} href="/" aria-label={img.alt} className="flex items-center justify-center">
              <Image src={img.src} alt={img.alt} className="max-w-[60px] sl:max-w-[70px] md:max-w-[80px] lg:max-w-[90px] xl:max-w-[100px]" />
            </a>
          ))}
        </div>
        <button className="bg-[#019d91] text-white py-3 px-6 rounded-[16px] mt-6 md:mt-8">
          Visit Developer Portal
        </button>
      </div>
    </div>
  );
};

export default Spotlight;
