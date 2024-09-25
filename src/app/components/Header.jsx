import Image from "next/image";
import logo from "../../../images/logo.png";
import search from "../../../images/search.svg";
const Header = () => {
  return (
    <div className="p-6">
      <div className="w-[90%] max-w-[1280px] mx-auto flex items-center gap-12">
        <Image className="w-[163px] h-[32px]" src={logo} />
        <nav className="text-base text-[#20272c] flex gap-5">
          <a href="/" className="">
            Products
          </a>
          <a href="/" className="">
            Integrations
          </a>
          <a href="/" className="">
            Customers
          </a>
          <a href="/" className="">
            Pricing
          </a>
        </nav>
        <div className="flex gap-5 items-center ml-[12%]">
        <div className="bg-[#f3f6f6]">
          <form className="flex">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <div className="flex items-center p-2">
                <Image src={search} alt="Search Icon" width={16} height={16} />
              </div>
              <input
                type="text"
                placeholder="Search animations"
                className="h-[38.4px] w-[300px] px-2 focus:outline-none bg-[#f3f6f6]"
              />
            </div>
          </form>
        </div>
        <span className="text-[#019d91] text-[16px] font-bold">Login</span>
        <div class="bg-[#019d91] text-white py-2 px-4 rounded-[9px] w-24 font-bold">Sign Up</div>

        </div>
      </div>
    </div>
  );
};

export default Header;
