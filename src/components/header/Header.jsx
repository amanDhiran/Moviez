import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import ContentWrapper from '../contentWrappper/ContentWrapper'
//import logo
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <header className={`fixed w-full h-60px z-[1] flex items-center ${show === "show" ? "bg-black3" : 
    show === "hide" ? "translate-y-[-60px]" :
    "bg-[rgba(0, 0, 0, 0.25)] backdrop-blur-[3.5px]"}`}>
      <ContentWrapper className="flex items-center justify-between">
        <div className=" cursor-pointer">
          {/*logo */}
          <h2 className="items-center flex h-[50px]">LOGO</h2>
        </div>
        <ul className=" list-none hidden items-center md:flex">
          <li
          className="h-[60px] flex items-center mx-[15px] text-white font-medium relative hover:text-pink cursor-pointer"
          >Movies</li>
          <li
          className="h-[60px] flex items-center mx-[15px] text-white font-medium relative hover:text-pink cursor-pointer"
          >TV Shows</li>
          <li
          className="h-[60px] flex items-center mx-[15px] text-white font-medium relative hover:text-pink cursor-pointer text-lg"
          >
          <HiOutlineSearch  />
          </li>
        </ul>

        <div className=" md:hidden" >
        <HiOutlineSearch  />
        </div>
      </ContentWrapper>
    </header>
  )
}
 
export default Header