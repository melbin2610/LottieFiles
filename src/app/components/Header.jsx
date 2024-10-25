"use client";
import Image from "next/image";
import logo from "../../../images/logo.png";
import search from "../../../images/search.svg";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="p-9 fixed bg-white w-full z-10 shadow-xl max-md:p-5">
      <div className="w-[90%] max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="w-[163px] h-[32px] max-sl:w-[50%]">
          <Image className=" cursor-pointer" src={logo} alt="Logo" />
        </div>

        <div className="  xl:flex items-center gap-5">
          <nav className=" text-base text-[#20272c] flex gap-5 max-xl:hidden">
            <Link
              href="/"
              className="flex items-center hover:text-green-500 transition-colors duration-200"
            >
              Products
              <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="flex items-center hover:text-green-500 transition-colors duration-200"
            >
              Integrations
              <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="flex items-center hover:text-green-500 transition-colors duration-200"
            >
              Customers
              <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="flex items-center hover:text-green-500 transition-colors duration-200"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex gap-5 items-center ">
            <div className="bg-[#f3f6f6] max-xl:hidden">
              <form className="flex">
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                  <div className="flex items-center p-2">
                    <Image
                      src={search}
                      alt="Search Icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search animations"
                    className="h-[38.4px] w-[300px] px-2 focus:outline-none bg-[#f3f6f6]"
                  />
                </div>
              </form>
            </div>

            <div className="flex items-center gap-3  max-xl:justify-end">
              {/* Search Icon */}
              <div className="hidden max-xl:block">
                <FaSearch className="text-black" />
              </div>

              {/* Login Link */}
              <Link
                href="/"
                className="text-[#019d91] text-[16px] font-bold cursor-pointer hover:text-green-200 max-sm:hidden"
              >
                Login
              </Link>

              {/* Sign Up Button */}
              <div className="bg-[#019d91] text-white py-2 px-4 rounded-[9px] w-24 font-bold cursor-pointer hover:bg-green-200 max-sm:hidden">
                Sign Up
              </div>
            </div>
             {/* Mobile Menu Button */}
        <button className="xl:hidden" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
          </div>
        </div>

       
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white p-4 shadow-xl p-16">
          
          <nav className="text-base text-[#20272c] flex flex-col gap-8 mt-4">
  <Link
    href="/"
    className="flex items-center justify-between hover:text-green-500 transition-colors duration-200 h-[100%]"
  >
    Products
    <span className="ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M1.5 5.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5l-6 6-6-6z" />
      </svg>
    </span>
  </Link>
  <Link
    href="/"
    className="flex items-center justify-between hover:text-green-500 transition-colors duration-200"
  >
    Integrations
    <span className="ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M1.5 5.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5l-6 6-6-6z" />
      </svg>
    </span>
  </Link>
  <Link
    href="/"
    className="flex items-center justify-between hover:text-green-500 transition-colors duration-200"
  >
    Customers
    <span className="ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M1.5 5.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5l-6 6-6-6z" />
      </svg>
    </span>
  </Link>
  <Link
    href="/"
    className="flex items-center justify-between hover:text-green-500 transition-colors duration-200"
  >
    Education
    <span className="ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M1.5 5.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5l-6 6-6-6z" />
      </svg>
    </span>
  </Link>
  <Link
    href="/"
    className="flex items-center justify-between hover:text-green-500 transition-colors duration-200"
  >
    Pricing
    {/* <span className="ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M1.5 5.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5l-6 6-6-6z" />
      </svg>
    </span> */}
  </Link>
</nav>

          <div className="flex justify-between items-center p-8 sm:hidden ">
          <Link
                href="/"
                className="text-[#019d91] text-[16px] font-bold cursor-pointer hover:text-green-200 "
              >
                Login
              </Link>

              {/* Sign Up Button */}
              <div className="bg-[#019d91] text-white py-2 px-4 rounded-[9px] w-24 font-bold cursor-pointer hover:bg-green-200 ">
                Sign Up
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
