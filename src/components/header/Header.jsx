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

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location])

    const controlNavbar = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
          setShow("hide")
        } else{
          setShow("show")
        }
      } else {
        setShow("top")
      }
      setLastScrollY(window.scrollY)
    }

    useEffect(() => {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }, [lastScrollY])

    const searchQueryHandler = (e) => {
      if (e.key === "Enter" && query.length > 0) {
          navigate(`/search/${query}`)
          setTimeout(() => {
            setShowSearch(false)
          }, 500)    
      }
    }

    const openSearch = () => {
      setMobileMenu(false)
      setShowSearch(true)
    }

    const openMobileMenu = () => {
      setMobileMenu(true)
      setShowSearch(false)
    }

    const navigationHandler = (type) => {
      if (type === "movie") {
        navigate("/explore/movie")
      } else {
        navigate("/explore/tv")
      }
      setMobileMenu(false)
    }

  return (
    <header className={`fixed w-full h-[60px] z-[2] flex items-center ${show === "show" ? "bg-black3" : 
    show === "hide" ? "translate-y-[-60px]" :
    "bg-[rgba(0, 0, 0, 0.25)] backdrop-blur-[3.5px]"} ${mobileMenu ? " bg-black3" : ""} transition-all ease-in-out duration-[0.1s]`}>
      <ContentWrapper className="flex items-center justify-between">
        <div className=" cursor-pointer z-[2]">
          {/*logo */}
          <h2 className="items-center flex h-[50px] text-white ">LOGO</h2>
        </div>
        <ul className={` md:flex ${mobileMenu ? "flex absolute top-[60px] left-0 bg-black3 flex-col w-full py-5 border-t-slate-700 border-t z-[1] animate-mobileMenu" : "list-none hidden items-center"}`}>
          <li 
          onClick={() => navigationHandler("movie")}
          className={`h-[60px] flex md:items-center md:mx-[15px] text-white font-medium relative hover:text-pink cursor-pointer ${mobileMenu ? "text-xl w-full h-auto py-[15px] px-[20px] m-0 flex flex-col items-start" : ""}`}
          >Movies</li>
          <li 
          onClick={() => navigationHandler("tv")}
          className={`h-[60px] flex md:items-center md:mx-[15px] text-white font-medium relative hover:text-pink cursor-pointer ${mobileMenu ? "text-xl w-full h-auto py-[15px] px-[20px] m-0 flex flex-col items-start" : ""}`}
          >TV Shows</li>
          <li
          className={`h-[60px] flex items-center mx-[15px] text-white font-medium relative hover:text-pink cursor-pointer text-lg ${mobileMenu ? "hidden" : ""}`}
          >
          <HiOutlineSearch  onClick={openSearch} />
          </li>
        </ul>

        <div className="flex text-lg z-[2] text-white items-center gap-5 md:hidden" >
        <HiOutlineSearch className=" cursor-pointer  " onClick={openSearch} />
        {mobileMenu ? (<VscChromeClose onClick={() => setMobileMenu(false)} />) : (<SlMenu onClick={openMobileMenu} />)}
        </div>
      </ContentWrapper>

      {showSearch && <div className=" animate-mobileMenu w-full h-[60px] bg-white absolute top-[60px] ">
        <ContentWrapper>
        <div className='flex items-center h-[40px] mt-[10px] w-full'>
            <input 
            className='w-full h-[50px] bg-white outline-0 border-0 px-[15px] text-sm md:h-[60px] md:text-xl md:px-[30px]'
            type="text"
            placeholder='Search for a movie or TV show...'
            onKeyUp={searchQueryHandler}
            onChange={(e) => setQuery(e.target.value)}
            />
            
            <VscChromeClose className=" cursor-pointer" onClick={() => setShowSearch(false)} />

          </div>
        </ContentWrapper>
      </div>}
    </header>
  )
}
 
export default Header