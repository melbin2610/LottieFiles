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
    <div className="bg-[#101417] p-12">
      <div className="w-[90%] max-w-[1280px] mx-auto">
        <h1 className='text-center text-[48px] text-[#ffff] font-bold'>The dotLottie Advantage</h1>
        <p className="text-center text-[20px] text-[#5e706d] font-bold mt-6">
          Introducing dotLottie, our innovative file format that brings a host of benefits:
        </p>
        <p className="text-center text-[20px] text-[#5e706d] font-bold">
          Reduced file size, interactivity, expressions alongside theming and bundled packages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          {/* Card 1 */}
          <div className="bg-[#1a2829] h-[280px] rounded-2xl p-6 flex flex-col ">
            <Image className="w-[22%]" src={reduce} alt="Reduced file size" />
            <h1 className="text-[24px] text-[#ffff] font-bold mt-5">Reduced file size</h1>
            <h2 className="text-[20px] text-[#5e706d] font-bold">Compress your animations by up to 80% and scale up or down without pixelation.</h2>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a2829] h-[280px] rounded-2xl p-6 flex flex-col ">
            <Image className="w-[22%]" src={theme} alt="Theming" />
            <h1 className="text-[24px] text-[#ffff] font-bold mt-5">Theming</h1>
            <h2 className="text-[20px] text-[#5e706d] font-bold">Adapt your animations effortlessly for dark mode, light mode, or user-custom modes.</h2>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a2829] h-[280px] rounded-2xl p-6 flex flex-col ">
            <Image className="w-[22%]" src={interactivity} alt="Interactivity" />
            <h1 className="text-[24px] text-[#ffff] font-bold mt-5">Interactivity</h1>
            <h2 className="text-[20px] text-[#5e706d] font-bold">Make your animations interactive for a better user experience.</h2>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1a2829] h-[280px] rounded-2xl p-6 flex flex-col ">
            <Image className="w-[22%]" src={bundle} alt="Bundled packages" />
            <h1 className="text-[24px] text-[#ffff] font-bold mt-3">Bundled Packages</h1>
            <h2 className="text-[20px] text-[#5e706d] font-bold">Easily bundle multiple animations into one file.</h2>
          </div>

          {/* Card 5 */}
          <div className="bg-[#1a2829] h-[280px] rounded-2xl p-6 flex flex-col ">
            <Image className="w-[22%]" src={unmacthed} alt="Unmatched performance" />
            <h1 className="text-[24px] text-[#ffff] font-bold mt-3">Unmatched Performance</h1>
            <h2 className="text-[20px] text-[#5e706d] font-bold">The new dotLottie runtimes are powered by high-performance graphics engine ThorVG.</h2>
          </div>

          {/* Card 6 */}
          <div className="bg-[#1a2829] h-[280px] rounded-2xl p-6 flex flex-col">
            <Image className="w-[22%]" src={performance} alt="Performance" />
            <h1 className="text-[24px] text-[#ffff] font-bold mt-3">Performance</h1>
            <h2 className="text-[20px] text-[#5e706d] font-bold">Experience fast load times and efficient rendering.</h2>
          </div>

          {/* Card 7 */}
          <div className="bg-[#1a2829]  h-[280px] rounded-2xl p-6 flex flex-col ">
            <Image className="w-[22%]" src={js} alt="JavaScript support" />
            <h1 className="text-[24px] text-[#ffff] font-bold mt-3">JavaScript Support</h1>
            <h2 className="text-[20px] text-[#5e706d] font-bold">Integrate easily with JavaScript for advanced features.</h2>
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default Advantages;
