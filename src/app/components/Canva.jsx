import Image from "next/image";
import canva from "../../../images/8QSIS4Ny67AXn8TWTEkvlYjtlHs.svg";

const Canva = () => {
  return (
    <div className='bg-[#101417] p-6 md:p-12'>
      <div className='w-full max-w-[1280px] mx-auto flex flex-col items-center'>
        <Image className="w-[30%] sm:w-[24%] md:w-[20%] lg:w-[15%] xl:w-[10%]" src={canva} alt="canva logo" />
        <h3 className="text-[20px] sm:text-[20px] md:text-[28px] text-[#ffff] font-bold mt-4 text-center max-sz:text-[15px] max-sl:text-[16px] arboria_bold">
          In our case, this led to saving approximately 8
        </h3>
        <h3 className="text-[20px] sm:text-[20px] md:text-[28px] text-[#ffff] font-bold text-center max-sz:text-[15px] max-sl:text-[16px]  arboria_bold">
          seconds, marking an improvement of around 80%.
        </h3>
        <h3 className="text-[20px] sm:text-[20px] md:text-[28px] text-[#ffff] font-bold text-center max-sz:text-[15px] max-sl:text-[16px]  arboria_bold">
          Similarly, in memory terms, we saved approximately
        </h3>
        <h3 className="text-[20px] sm:text-[20px] md:text-[28px] text-[#ffff] font-bold text-center max-sz:text-[15px] max-sl:text-[16px]  arboria_bold">
          164MB, which equates to ~70%.
        </h3>
        <button className="text-white mt-4 px-6 py-2 border border-white rounded-lg bg-transparent hover:bg-white hover:text-black transition duration-200 max-sz:text-[10px] karla_regular">
          Learn how Canva did it
        </button>
      </div>
    </div>
  );
};

export default Canva;
