import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";
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

    const openSearch = () => {
      setMobileMenu(false)
      setShowSearch(true)
    }

    const openMobileMenu = () => {
      setMobileMenu(true)
      setShowSearch(false)
    }

  return (
    <header className={`fixed w-full h-[60px] z-[1] flex items-center ${show === "show" ? "bg-black3" : 
    show === "hide" ? "translate-y-[-60px]" :
    "bg-[rgba(0, 0, 0, 0.25)] backdrop-blur-[3.5px]"} ${mobileMenu ? " bg-black3" : ""}`}>
      <ContentWrapper className="flex items-center justify-between">
        <div className=" cursor-pointer">
          {/*logo */}
          <h2 className="items-center flex h-[50px] text-white">LOGO</h2>
        </div>
        <ul className={` md:flex ${mobileMenu ? "flex absolute top-[60px] left-0 bg-black3 flex-col w-full py-5 border-t-slate-700 border-t" : "list-none hidden items-center"}`}>
          <li
          className={`h-[60px] flex md:items-center md:mx-[15px] text-white font-medium relative hover:text-pink cursor-pointer ${mobileMenu ? "text-xl w-full h-auto py-[15px] px-[20px] m-0 flex flex-col items-start" : ""}`}
          >Movies</li>
          <li
          className={`h-[60px] flex md:items-center md:mx-[15px] text-white font-medium relative hover:text-pink cursor-pointer ${mobileMenu ? "text-xl w-full h-auto py-[15px] px-[20px] m-0 flex flex-col items-start" : ""}`}
          >TV Shows</li>
          <li
          className={`h-[60px] flex items-center mx-[15px] text-white font-medium relative hover:text-pink cursor-pointer text-lg ${mobileMenu ? "hidden" : ""}`}
          >
          <HiOutlineSearch  />
          </li>
        </ul>

        <div className="flex text-lg text-white items-center gap-5 md:hidden" >
        <HiOutlineSearch  />
        {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
        </div>
      </ContentWrapper>
    </header>
  )
}
 
export default Header