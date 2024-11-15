"use client";
import Image from "next/image";
import logo from "../../../images/logo.png";
import search from "../../../images/search.svg";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon
import { MdKeyboardArrowDown } from "react-icons/md";
import Product from "./Product";
import Integrations from "./Integrations";
import Customers from "./Customers";
import Education from "./Education";


const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false); // State for search menu
  const [hoveredItem, setHoveredItem] = useState("");
  const toggleMobileMenu = () => {
    if (isSearchOpen) {
      setSearchOpen(false); // Close search if it's open
    }
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchMenu = () => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false); // Close mobile menu if it's open
    }
    setSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <div className="p-8 fixed bg-white w-full z-10 shadow-xl max-md:p-5">
        <div className="w-[90%] max-w-[1400px] mx-auto flex items-center justify-between relative">
          <div className="w-[163px] h-[32px] max-sl:w-[50%]">
            <Image className="cursor-pointer" src={logo} alt="Logo" />
          </div>

          <div className="xl:flex items-center gap-5">
            <nav className=" text-base text-[#20272c] karla_regular flex gap-5 max-xl:hidden font-normal">
              <Link
                href="/"
                className="flex items-center hover:text-green-500 transition-colors duration-200 hover:underline underline-offset-[44px] decoration-green-500 decoration-4"
                onMouseEnter={() => setHoveredItem("Product")}
                onMouseLeave={() => setHoveredItem("")}
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
                className=" flex items-center hover:text-green-500 transition-colors duration-200 hover:underline underline-offset-[44px] decoration-green-500 decoration-4"
                onMouseEnter={() => setHoveredItem("Integrations")}
                onMouseLeave={() => setHoveredItem("")}
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
                className="flex items-center  hover:text-green-500 transition-colors duration-200 hover:underline underline-offset-[44px] decoration-green-500 decoration-4"
                onMouseEnter={() => setHoveredItem("Customers")}
                onMouseLeave={() => setHoveredItem("")}
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
                className=" flex items-center hover:text-green-500 transition-colors duration-200 hover:underline underline-offset-[44px] decoration-green-500 decoration-4"
                onMouseEnter={() => setHoveredItem("Education")}
                onMouseLeave={() => setHoveredItem("")}
              >
                Education
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
                className="flex items-center hover:text-green-500 transition-colors duration-200 "
              >
                Pricing
              </Link>
            </nav>

            <div className="flex gap-5 items-center">
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
                      className="h-[38.4px] w-[300px] px-2 focus:outline-none bg-[#f3f6f6] karla_regular"
                    />
                  </div>
                </form>
              </div>

              <div className="flex items-center gap-3 max-xl:justify-end">
                {/* Search Icon */}
                {!isSearchOpen && (
                  <div
                    className="hidden max-xl:block cursor-pointer"
                    onClick={toggleSearchMenu}
                  >
                    <FaSearch className="text-black" />
                  </div>
                )}

                {/* Login Link */}
                <Link
                  href="/"
                  className="text-[#019d91] text-[16px] font-bold cursor-pointer hover:text-green-200 max-sm:hidden karla_bold"
                >
                  Login
                </Link>

                {/* Sign Up Button */}
                <div className="bg-[#019d91] text-white py-2 px-4 rounded-[9px] w-24 font-bold cursor-pointer hover:bg-green-200 max-sm:hidden karla_bold">
                  Sign Up
                </div>
              </div>

              {/* Mobile Menu Button */}
              {isSearchOpen ? (
                <button className="xl:hidden" onClick={toggleSearchMenu}>
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
                        true ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                      }
                    />
                  </svg>
                </button>
              ) : (
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
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white p-4  h-[100vh] ">
            <nav className="text-base text-[#20272c] flex flex-col gap-8 mt-4">
              <Link
                href="/"
                className="flex items-center justify-between hover:text-green-500 transition-colors duration-200 h-[]"
              >
                Products
                <span className="ml-2">
                  <MdKeyboardArrowDown />
                </span>
              </Link>
              <Link
                href="/"
                className="flex items-center justify-between hover:text-green-500 transition-colors duration-200"
              >
                Integrations
                <span className="ml-2">
                  <MdKeyboardArrowDown />
                </span>
              </Link>
              <Link
                href="/"
                className="flex items-center justify-between hover:text-green-500 transition-colors duration-200"
              >
                Customers
                <span className="ml-2">
                  <MdKeyboardArrowDown />
                </span>
              </Link>
              <Link
                href="/"
                className="flex items-center justify-between hover:text-green-500 transition-colors duration-200"
              >
                Education
                <span className="ml-2">
                  <MdKeyboardArrowDown />
                </span>
              </Link>
              <Link
                href="/"
                className="flex items-center justify-between hover:text-green-500 transition-colors duration-200"
              >
                Pricing
              </Link>
            </nav>
            <div className="flex justify-between items-center mt-60 sm:hidden">
              <Link
                href="/"
                className="text-[#019d91] text-[16px] font-bold cursor-pointer hover:text-green-200"
              >
                Login
              </Link>
              <div className="bg-[#019d91] text-white py-2 px-4 rounded-[9px] w-24 font-bold cursor-pointer hover:bg-green-200">
                Sign Up
              </div>
            </div>
          </div>
        )}

        {/* Search Menu */}
        {isSearchOpen && (
          <div className="inset-0 z-20 flex flex-col justify-between bg-white p-4 items-center h-[89vh]">
            <div className="w-full mb-4">
              <div className="flex items-center border border-green-300 rounded-xl overflow-hidden">
                <div className="flex items-center p-2">
                  <FaSearch className="text-gray-400" /> {/* Search Icon */}
                </div>
                <input
                  type="text"
                  placeholder="Search animations"
                  className="h-[38.4px] w-full px-2 focus:outline-none karla_regular"
                />
              </div>
            </div>

            <div className="flex justify-between items-center w-full max-w-md sm:hidden">
              <Link
                href="/"
                className="text-[#019d91] text-[16px] font-bold cursor-pointer hover:text-green-200"
              >
                Login
              </Link>
              <div className="bg-[#019d91] text-white py-2 px-4 rounded-[9px] w-24 font-bold cursor-pointer hover:bg-green-200">
                Sign Up
              </div>
            </div>
          </div>
        )}
      </div>
      {hoveredItem === "Product" && <Product />}
      {hoveredItem === "Integrations" && <Integrations />}
      {hoveredItem === "Customers" && <Customers/>}
      {hoveredItem === "Education" && <Education/>}
    </>
  );
};

export default Header;
