import Image from "next/image";
import canva from "../../../images/8QSIS4Ny67AXn8TWTEkvlYjtlHs.svg";

const Canva = () => {
  return (
    <div className='bg-[#101417] p-6 md:p-12'>
      <div className='w-full max-w-[1280px] mx-auto flex flex-col items-center'>
        <Image className="w-[30%] sm:w-[22%]" src={canva} alt="canva logo" />
        <h3 className="text-[24px] sm:text-[28px] text-[#ffff] font-bold mt-4 text-center">
          In our case, this led to saving approximately 8
        </h3>
        <h3 className="text-[24px] sm:text-[28px] text-[#ffff] font-bold text-center">
          seconds, marking an improvement of around 80%.
        </h3>
        <h3 className="text-[24px] sm:text-[28px] text-[#ffff] font-bold text-center">
          Similarly, in memory terms, we saved approximately
        </h3>
        <h3 className="text-[24px] sm:text-[28px] text-[#ffff] font-bold text-center">
          164MB, which equates to ~70%.
        </h3>
        <button className="text-white mt-4 px-6 py-2 border border-white rounded-lg bg-transparent hover:bg-white hover:text-black transition duration-200">
          Learn how Canva did it
        </button>
      </div>
    </div>
  );
};

export default Canva;
