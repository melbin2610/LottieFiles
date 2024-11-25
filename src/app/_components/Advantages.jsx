import Image from "next/image";
import reduce from "../../../images/reduce.png";
import theme from "../../../images/theme.png";
import interactivity from "../../../images/interactivity.png";
import bundle from "../../../images/bundle.png";
import unmacthed from "../../../images/unmacthed.png";
import performance from "../../../images/performance.png";
import js from "../../../images/js.png";

const Advantages = () => {
  return (
    <div className="bg-[#101417] p-6 max-sz:p-2">
      <div className="wrapper">
        <h1 className="text-center text-[32px] max-sl:text-[22px] sm:text-[40px] md:text-[48px] text-[#ffff] font-bold arboria_bold">
          The dotLottie Advantage
        </h1>
        <p className="text-center text-[16px] max-sl:text-[16px] sm:text-[18px] md:text-[20px] text-[#d6fef1b3] font-bold mt-6 karla_regular">
        Introducing dotLottie, our innovative file format that brings a host of benefits:<br className="max-md:hidden"/>
        reduced file size, interactivity, expressions alongside theming and bundled packages.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 mt-10">
          {/* Card 1 */}
          <div className="advantage-bg advantage-bg:hover rounded-2xl p-6 flex flex-col max-sl:h-[100%] group hover:bg-gradient-to-br hover:from-[#2c4c44] hover:via-transparent hover:to-transparent hover:text-white transition-all duration-1000">
            <div>
            <Image className="w-[20%] max-sl:w-[30%] " src={reduce} alt="Reduced file size" />
            <h1 className="text-[20px] sm:text-[24px] text-[#ffff] font-bold mt-5 max-sl:text-[20px] arboria_bold">
              Reduced file size
            </h1>
            <h2 className="text-[16px] sm:text-[20px] text-[#d6fef1b3] font-normal max-sl:text-[20px] max-sl:h-[10%] karla_regular">
              Compress your animations by up to 80% and scale up or down without pixelation.
            </h2>
            </div>
           
          </div>





          {/* Card 2 */}
          <div className="advantage-bg advantage-bg:hover rounded-2xl p-6 flex flex-col max-sl:h-[100%] group hover:bg-gradient-to-br hover:from-[#2c4c44] hover:via-transparent hover:to-transparent hover:text-white transition-all duration-1000">
            <Image className="w-[20%] max-sl:w-[30%]" src={theme} alt="Theming" />
            <h1 className="text-[20px] sm:text-[24px] text-[#ffff] font-bold mt-4 max-sl:text-[20px] arboria_bold">Theming</h1>
            <h2 className="text-[16px] sm:text-[20px] text-[#d6fef1b3] font-normal max-sl:text-[20px] karla_regular">
              Adapt your animations effortlessly for dark mode, light mode, or user-custom modes.
            </h2>
          </div>

          {/* Card 3 */}
          <div className="advantage-bg advantage-bg:hover rounded-2xl p-6 flex flex-col max-sl:h-[100%] group hover:bg-gradient-to-br hover:from-[#2c4c44] hover:via-transparent hover:to-transparent hover:text-white transition-all duration-1000">
            <Image className="w-[20%] max-sl:w-[30%]" src={interactivity} alt="Interactivity" />
            <h1 className="text-[20px] sm:text-[24px] text-[#ffff] font-bold mt-4 max-sl:text-[20px] arboria_bold">Interactivity</h1>
            <h2 className="text-[16px] sm:text-[20px] text-[#d6fef1b3] font-normal max-sl:text-[20px] karla_regular">
            Leverage new interactivity methods to create engaging, interactive animations across platforms.
            </h2>
          </div>

          {/* Card 4 */}
          <div className="advantage-bg advantage-bg:hover rounded-2xl p-6 flex flex-col max-sl:h-[100%] group hover:bg-gradient-to-br hover:from-[#2c4c44] hover:via-transparent hover:to-transparent hover:text-white transition-all duration-1000">
            <Image className="w-[20%] max-sl:w-[30%]" src={bundle} alt="Bundled packages" />
            <h1 className="text-[20px] sm:text-[24px] text-[#ffff] font-bold  max-sl:text-[20px] arboria_bold">
              Bundled Packages
            </h1>
            <h2 className="text-[16px] sm:text-[20px] text-[#d6fef1b3] font-normal max-sl:text-[20px] karla_regular">
            Include multiple animations and assets in a single dotLottie file, simplifying management and deployment.


            </h2>
          </div>
        
        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 mt-5 ">
                 {/* Card 5 */}
          <div className="advantage-bg advantage-bg:hover rounded-2xl p-6 flex flex-col max-sl:h-[100%] group hover:bg-gradient-to-br hover:from-[#2c4c44] hover:via-transparent hover:to-transparent hover:text-white transition-all duration-1000">
            <Image className="w-[20%] max-sl:w-[30%]" src={unmacthed} alt="Unmatched performance" />
            <h1 className="text-[48px] max-srb:text-[30px]  text-[#ffff] max-sz:text-[20px]   arboria_bold">
              Unmatched Performance
            </h1>
            <h2 className="text-[16px] sm:text-[20px] text-[#d6fef1b3] font-normal max-sl:text-[20px] karla_regular">
            The new dotLottie runtimes are powered by high-performance graphics engine ThorVG. With the support for the dotLottie format which is 80% smaller than a normal JSON.
            </h2>
          </div>
           <div className=" flex flex-col gap-[30px] max-md:gap-[28px]">
               {/* Card 6 */}
          <div className="advantage-bg advantage-bg:hover rounded-2xl p-6 flex flex-col max-sl:h-[100%] group hover:bg-gradient-to-br hover:from-[#2c4c44] hover:via-transparent hover:to-transparent hover:text-white transition-all duration-1000">
            <Image className="w-[20%] max-sl:w-[30%]" src={performance} alt="Performance" />
            <h1 className="text-[20px] sm:text-[24px] text-[#ffff] font-bold mt-1 max-sl:text-[20px] arboria_bold">Performance</h1>
            <h2 className="text-[16px] sm:text-[20px] text-[#d6fef1b3] font-normal max-sl:text-[20px] karla_regular">
            Our runtimes outperform the current web player by a significant margin, as demonstrated in our detailed <span className="text-[#019d91]">performance index.</span>


            </h2>
          </div>

          {/* Card 7 */}
          <div className="advantage-bg advantage-bg:hover rounded-2xl p-6 flex flex-col max-sl:h-[100%] group hover:bg-gradient-to-br hover:from-[#2c4c44] hover:via-transparent hover:to-transparent hover:text-white transition-all duration-1000">
            <Image className="w-[20%] max-sl:w-[30%]" src={js} alt="JavaScript support" />
            <h1 className="text-[20px] sm:text-[24px] text-[#ffff] font-bold mt-0 max-sl:text-[20px] arboria_bold">
            JS library
            </h1>
            <h2 className="text-[16px] sm:text-[20px] text-[#d6fef1b3] font-normal max-sl:text-[20px] karla_regular">
            Create and control dotLottie animations effortlessly with our <span className="text-[#019d91]">powerful JavaScript library.</span>
            </h2>
          </div>
           </div>
         
          </div>
      </div>
    </div>
  );
};

export default Advantages;
