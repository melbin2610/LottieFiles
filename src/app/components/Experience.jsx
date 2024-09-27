import Image from "next/image";
import exp from "../../../images/experience.png";
import battery from "../../../images/battery.png";
import settings from "../../../images/settings.png";
import ae from "../../../images/ae-.png";

const Experience = () => {
  return (
    <div className="bg-[#101417] p-28">
      <div className='w-[90%] max-w-[1280px] mx-auto flex justify-between items-center max-md:flex-col '>
        <div className="">
          <h1 className="text-[50px] text-[#ffff] font-bold max-sra:text-[30px]">
            Seamless Cross-Platform<br/>Experience
          </h1>
          <p className="text-[24px] text-[#5e706d] font-normal max-sra:text-[18px]">
            Say goodbye to the frustration of inconsistent animations across platforms. Our dotLottie Runtimes ensure feature parity across web, Android and iOS.
          </p>
          
        </div>
        <Image className="w-[100%] h-[100%]"src={exp} alt="Experience Image " />
      </div>
      <div className="w-[90%] max-w-[1280px] mx-auto flex justify-between mt-24 max-xl:flex-wrap max-sm:flex-col max-sm:items-center">
        <div className="w-[50%]">
        <Image className="block w-[30%]"src={battery} alt="Experience Image" />
        <h2 className="text-[24px] text-[#ffff] font-bold">Enhanced performance</h2>
        <p className="text-[20px] text-[#5e706d] font-bold w-[87%] max-sm:text-[13px]">Experience lightning-fast, smooth animations with our optimized high-performance runtime, designed to boost efficiency across all devices.</p>
        <h5 className="text-[20px] text-[#019d91]">Canva Case Study</h5>
        <h6 className="text-[20px] text-[#019d91]">Performance Testing Page</h6>
        </div>
        <div className="w-[50%]">
        <Image className="block  w-[30%]"src={settings} alt="Experience Image" />
        <h2 className="text-[24px] text-[#ffff] font-bold">Platform consistency</h2>
        <p className="text-[20px] text-[#5e706d] font-bold  w-[87%] max-sm:text-[13px]">Achieve uniform animation rendering on web, iOS, and Android, ensuring your animations perform consistently across all platforms.</p>
        <h5 className="text-[20px] text-[#019d91]">Supported Features</h5>
        </div>
        <div className="w-[50%]">
        <Image className="block  w-[30%]"src={ae} alt="Experience Image" />
        <h2 className="text-[24px] text-[#ffff] font-bold">AE expressions ready</h2>
        <p className="text-[20px] text-[#5e706d] font-bold  w-[87%] max-sm:text-[13px]">Effortlessly integrate AE Expressions with support across web, iOS, and Android, now seamlessly incorporated into the dotLottie player.</p>
        </div>
      </div> 
    </div>
  );
};

export default Experience;
