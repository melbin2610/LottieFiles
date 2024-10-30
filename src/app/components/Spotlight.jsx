import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
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
        <button className="text-base text-[#ffff] mt-9 sm:text-lg md:text-xl p-2 bg-[#006262] karla_bold w-full max-w-[404px] text-center rounded-[15px] font-bold max-sl:text-[12px]">
          Introducing the new dotLottie Runtimes
        </button>
        <h1 className="text-2xl sl:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#ffff] arboria_bold font-bold mt-4 text-center max-sl:text-[18px]">
          Built for Performance and
        </h1>
        <h1 className="text-2xl sl:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#ffff] arboria_bold font-bold mt-4 text-center max-sl:text-[18px]">
          Cross-Platform Consistency
        </h1>
        <p className="text-base sl:text-lg md:text-xl text-[#d6fef1b3] mt-3 text-center karla_regular">
          Experience enhanced animations, faster load times, and reliable
        </p>
        <p className="text-base sl:text-lg md:text-xl text-[#d6fef1b3] mt-1 text-center karla_regular">
          cross-platform support with the new dotLottie Runtimes.
        </p>
        <div className="flex space-x-4 mt-6 flex-wrap justify-center karla_regular">
          {[
            { src: web, alt: "Web JS", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-web/" },
            { src: react, alt: "React", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-react/" },
            { src: vue, alt: "Vue JS", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-vue/" },
            { src: svelte, alt: "Svelte", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-wc/" },
            { src: ios, alt: "iOS", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-ios/" },
            { src: android, alt: "Android", href: "https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-android/" },
          ].map(({ src, alt, href }) => (
            <Link key={alt} href={href} target="_blank" rel="noopener noreferrer" aria-label={alt} className="flex items-center justify-center">
              <Image src={src} alt={alt} className="max-w-[60px] sl:max-w-[70px] md:max-w-[80px] lg:max-w-[90px] xl:max-w-[100px]" />
            </Link>
          ))}
        </div>
        <button 
        className="bg-[#019d91] text-white py-2 px-4 rounded-[16px] mt-8 font-bold text-[14px] sl:py-3 sl:px-6 sl:text-[16px] 
        sz:py-4 sz:px-8 sz:text-[18px] sm:py-5 sm:px-10 sm:text-[20px] 
        md:py-6 md:px-12 md:text-[22px] srb:py-7 srb:px-14 srb:text-[22px] 
        sra:py-8 sra:px-15 sra:text-[24px] xl:py-8 xl:px-16 xl:text-[26px] karla_regular"
        aria-label="Visit Developer Portal">
        Visit Developer Portal
      </button>

        {/* <button className="bg-[#019d91] text-white py-3 px-6 rounded-[16px] mt-6 md:mt-8 karla_bold">
          Visit Developer Portal
        </button> */}
      </div>
    </div>
  );
};

export default Spotlight;
