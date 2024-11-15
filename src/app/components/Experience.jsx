import Image from "next/image";
import exp from "../../../images/experience.png";
import battery from "../../../images/battery.png";
import settings from "../../../images/settings.png";
import ae from "../../../images/ae-.png";
import { BsArrowRight } from "react-icons/bs";


const Experience = () => {
  return (
    <div className="bg-[#101417] p-8 sl:p-10 sm:p-16 md:p-24 lg:p-28">
      <div className='w-[90%] max-w-[1280px] mx-auto flex flex-col md:flex-row max-md:flex-col-reverse justify-between items-center'>
        <div className="mb-8 md:mb-0">
          <h1 className="text-[24px] sl:text-[30px] md:text-[40px] text-[#ffff] font-bold arboria_bold">
            Seamless Cross-Platform<br />Experience
          </h1>
          <p className="text-[16px] sl:text-[18px] md:text-[24px] text-[#d6fef1b3] font-normal karla_regular">
            Say goodbye to the frustration of inconsistent animations across platforms. Our dotLottie Runtimes ensure feature parity across web, Android and iOS.
          </p>
        </div>
        <Image className="w-full h-auto md:w-[50%]" src={exp} alt="Experience Image" />
      </div>

      <div className="w-[90%] max-w-[1280px] mx-auto flex flex-col md:flex-row mt-16">
  {[
    {
      img: battery,
      title: "Enhanced performance",
      description: "Experience lightning-fast, smooth animations with our optimized high-performance runtime, designed to boost efficiency across all devices.",
      caseStudy: "Canva Case Study",
      testPage: "Performance Testing Page"
    },
    {
      img: settings,
      title: "Platform consistency",
      description: "Achieve uniform animation rendering on web, iOS, and Android, ensuring your animations perform consistently across all platforms.",
      caseStudy: "Supported Features"
    },
    {
      img: ae,
      title: "AE expressions ready",
      description: "Effortlessly integrate AE Expressions with support across web, iOS, and Android, now seamlessly incorporated into the dotLottie player."
    }
  ].map((item, index) => (
    <div key={index} className="flex flex-col  mb-8 md:mb-0 md:w-1/3">
      <Image className="w-[23%] max-sl:w-[32%]" src={item.img} alt="Experience Image" />
      <h2 className="text-[18px] sl:text-[20px] md:text-[16px] srb:text-[18px] xl:text-[26px] text-[#ffff]  font-bold mt-4  arboria_bold max-sl:text-[20px]">{item.title}</h2>
      <p className="text-[14px] sl:text-[16px] md:text-[14px] srb:text-[20px] xl:text-[22px] text-[#d6fef1b3] font-normal  w-[90%] karla_regular max-sl:text-[18px]">{item.description}</p>
      {item.caseStudy && (
        <>
          <h5 className="text-[14px] sl:text-[16px] md:text-[16px] srb:text-[18px] xl:text-[22px] text-[#019d91] mt-2 karla_regular flex items-center gap-3 max-sl:text-[17px] cursor-pointer">{item.caseStudy}
          <span><BsArrowRight /></span>
          </h5>
          
          
          {item.testPage && <h6 className="text-[14px] sl:text-[16px] md:text-[16px] srb:text-[18px] xl:text-[22px] text-[#019d91] karla_regular flex items-center gap-3 max-sl:text-[17px] cursor-pointer">{item.testPage}
          <span><BsArrowRight /></span>
            </h6>}
        </>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default Experience;
