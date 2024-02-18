import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from '../contentWrappper/ContentWrapper';

const Footer = () => {
  return (
      <footer className=" bg-black3 py-[50px] text-white relative ">
          <ContentWrapper className={"flex items-center flex-col"}>
              <ul className=" list-none flex items-center justify-center gap-[15px] mb-[20px] md:mb-[30px] md:gap-[30px]">
                  
                  {["Terms Of Use", "Privacy-Policy", "About", "Blog", "FAQ"].map((item, i) => {return <li
                  key={i}
                  className="transition-all ease-in-out duration-[0.3s] hover:text-pink cursor-pointer md:text-base text-xs">{item}</li>} )}
              </ul>
              <div className="text-[12px] leading-[20px] opacity-50 text-center max-w-[800px] mb-[20px] md:text-sm md:mb-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className="flex items-center justify-center gap-[10px]">
                  
                      {[<FaFacebookF />, <FaInstagram />,<FaTwitter />, <FaLinkedin />].map((item, i) => {
                        return <span className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center cursor-pointer transition-all ease-in-out duration-[0.3s] hover:text-pink hover:shadow-socialIcon ">
                        {item}
                    </span>
                      })}
              </div>
          </ContentWrapper>
      </footer>
  );
};

export default Footer;