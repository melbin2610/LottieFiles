import Image from "next/image";
import web from "../../../images/Web JS.svg";
import react from "../../../images/React.svg";
import vue from "../../../images/Vue JS.svg";
import svelte from "../../../images/Svelte.svg";
import ios from "../../../images/iOS.svg";
import android from "../../../images/Android.svg";

const FrameWork = () => {
  return (
    <div className="bg-[#101417] p-6  flex flex-col items-center">
        <div className='w-[90%] max-w-[1280px] mx-auto'>
            <h1 className='text-center text-[48px] text-[#ffff] font-bold'>Robust Framework Integrations</h1>
            <h2 className='text-center text-[20px] text-[#5e706d] font-bold'>With our runtimes, integrating with various popular frameworks is effortless.</h2>
        </div>
        <div className="w-[1150px] h-[326px] border border-gray-500 rounded-[10px] mt-14">
            <div className='bg-[#20272c] p-4'>
            <nav className="text-base text-[#ffff] flex justify-center gap-[20px] font-[16px]">
          <a href="/" className="">
          Web
          </a>
          <a href="/" className="">
          React
          </a>
          <a href="/" className="">
          VueJS
          </a>
          <a href="/" className="">
          Svelte
          </a>
          <a href="/" className="">
          iOS
          </a>
          <a href="/" className="">
          Android
          </a>
        </nav>
            </div>
        </div>
        <div className="flex space-x-10 mt-10">
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
        <button className="bg-[#019d91] text-white py-4 px-12 rounded-[16px] mt-8 font-[20px] font-bold">Visit Developer Portal</button>
    </div>
    
  )
}

export default FrameWork