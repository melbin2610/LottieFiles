import Image from "next/image";
import web from "../../../images/Web JS.svg";
import react from "../../../images/React.svg";
import vue from "../../../images/Vue JS.svg";
import svelte from "../../../images/Svelte.svg";
import ios from "../../../images/iOS.svg";
import android from "../../../images/Android.svg";

const Spotlight = () => {
  return (
    <div className="bg-[#002a2a] p-28">
      <div className="w-[90%] max-w-[1280px] mx-auto flex items-center flex-col">
        <h3 className="text-[20px] text-[#ffff] bg-[#006262] w-[404px] text-center rounded-[15px] font-bold">
          Introducing the new dotLottie Runtimes
        </h3>
        <h1 className="text-[64px] text-[#ffff] font-bold">Built for Performance and</h1>
        <h1 className="text-[64px] text-[#ffff] font-bold">Cross-Platform Consistency</h1>
        <p className="text-[20px] text-[#d6fef1b3]">Experience enhanced animations, faster load times, and reliable</p>
        <p className="text-[20px] text-[#d6fef1b3]">cross-platform support with the new dotLottie Runtimes.</p>
        <div className="flex space-x-4 mt-10">
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
        <button className="bg-[#019d91] text-white py-4 px-12 rounded-[16px] mt-8">Visit Developer Portal</button>
      </div>
    </div>
  );
}

export default Spotlight;
