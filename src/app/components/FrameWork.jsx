import Image from "next/image";
import web from "../../../images/Web JS.svg";
import react from "../../../images/React.svg";
import vue from "../../../images/Vue JS.svg";
import svelte from "../../../images/Svelte.svg";
import ios from "../../../images/iOS.svg";
import android from "../../../images/Android.svg";
import { DotLottie } from '@lottiefiles/dotlottie-web';

const FrameWork = () => {
  return (
    <div className="bg-[#101417] p-6 flex flex-col items-center">
      <div className='w-[90%] max-w-[1280px] mx-auto'>
        <h1 className='text-center text-[48px] text-[#ffff] font-bold'>Robust Framework Integrations</h1>
        <h2 className='text-center text-[20px] text-[#5e706d] font-bold'>With our runtimes, integrating with various popular frameworks is effortless.</h2>
      </div>
      <div className="w-[60%] h-[326px] border border-gray-500 rounded-[10px] mt-14 flex flex-col items-center max-sm:hidden">
        <div className='bg-[#20272c] w-full p-4'>
          <nav className="text-base text-[#ffff] flex justify-center gap-[20px] font-[16px]">
            {["Web", "React", "VueJS", "Svelte", "iOS", "Android"].map(framework => (
              <a key={framework} href="/" className="hover:text-green-500 transition-colors duration-200">
                {framework}
              </a>
            ))}
          </nav>
        </div>
        <div className="bg-[#20272c] w-[90%] h-[216px] rounded-xl mt-5 overflow-auto p-5">
          <pre className="p-4 text-xs">
            <code className="text-[#fff] text-[14px]  ">
              {`import { DotLottie } from '@lottiefiles/dotlottie-web';

const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie",
});`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex space-x-10 mt-10 flex-wrap justify-center">
        {[{ src: web, alt: "Web JS" }, { src: react, alt: "React" }, { src: vue, alt: "Vue JS" }, { src: svelte, alt: "Svelte" }, { src: ios, alt: "iOS" }, { src: android, alt: "Android" }].map(({ src, alt }) => (
          <a key={alt} href="/" aria-label={alt}>
            <Image src={src} alt={alt} />
          </a>
        ))}
      </div>
      <button className="bg-[#019d91] text-white py-4 px-12 rounded-[16px] mt-8 font-[20px] font-bold" aria-label="Visit Developer Portal">
        Visit Developer Portal
      </button>
    </div>
  );
}

export default FrameWork;
