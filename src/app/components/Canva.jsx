import Image from "next/image";
import canva from "../../../images/8QSIS4Ny67AXn8TWTEkvlYjtlHs.svg"

const Canva = () => {
  return (
    <div className='bg-[#101417] p-12'>
        <div className='w-[90%] max-w-[1280px] mx-auto flex flex-col items-center'>
        <Image className="w-[22%] " src={canva} alt="canva logo" />
        <h3 className="text-[28px] text-[#ffff] font-bold">In our case, this led to saving approximately 8</h3>
        <h3 className="text-[28px] text-[#ffff] font-bold">seconds, marking an improvement of around 80%.</h3>
        <h3 className="text-[28px] text-[#ffff] font-bold">Similarly, in memory terms, we saved approximately </h3>
        <h3 className="text-[28px] text-[#ffff] font-bold">164MB, which equates to ~70%.</h3>
       <button className="text-white mt-4 px-3 py-1 border border-white rounded-lg bg-transparent hover:bg-white hover:text-black">
  Learn how Canva did it
</button>
        </div>
    </div>
  )
}

export default Canva