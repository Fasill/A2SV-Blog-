'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import assets from "@/assets/index";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [focusedTab, setFocusedTab] = useState<number>(5);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const underlineRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const setFocus = (val: number) => {
    setFocusedTab(val);
    updateUnderlinePosition(val - 1);
  };

  const updateUnderlinePosition = (index: number) => {
    if (underlineRef.current && navItemsRef.current[index]) {
      const navItem = navItemsRef.current[index];
      underlineRef.current.style.width = `${navItem?.offsetWidth}px`;
      underlineRef.current.style.left = `${navItem?.offsetLeft}px`;
    }
  };

  useEffect(() => {
    updateUnderlinePosition(focusedTab - 1);
    window.addEventListener('resize', () => updateUnderlinePosition(focusedTab - 1));
    return () => window.removeEventListener('resize', () => updateUnderlinePosition(focusedTab - 1));
  }, [focusedTab]);

  return (
    <nav className='flex items-center justify-between p-4 md:p-6 text-[16px] md:text-[20px] relative'>
      <Image src={assets.logo} alt="Logo" className="w-24 md:w-auto" />

      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div className={`w-[50%] fixed top-0 right-0 h-full bg-white shadow-lg z-10 p-6 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:flex md:translate-x-0 md:shadow-none md:bg-transparent md:p-0`}>
        <ul className='relative flex flex-col md:flex-row items-center justify-between md:w-[90%] space-y-4 md:space-y-0 mt-4 md:mt-0'>
          {['Home', 'Teams', 'Success Stories', 'About Us', 'Blogs', 'Get Involved'].map((item, index) => (
            <li
              key={index}
              ref={(el: HTMLLIElement | null) => {
                navItemsRef.current[index] = el;
              }}
              className={`text-[#565656] cursor-pointer ${focusedTab === index  ? 'text-[#264FAD]' : ''}`}
              onClick={() => { setFocus(index + 1); setIsMenuOpen(false); }}
            >
              {item}
            </li>
          ))}
          <div
            ref={underlineRef}
            className={`absolute bg-[#264FAD] h-[2px] bottom-[-4px] transition-all duration-300 ease-in-out`}
          ></div>
        </ul>
      </div>

      <ul className='hidden md:flex items-center justify-between w-[15%] mt-4 md:mt-0'>
        <li className="cursor-pointer">Login</li>
        <li className='bg-[#264FAD] rounded-[10px] h-[59px] w-[160px] text-white flex items-center justify-center cursor-pointer'>
          Donate
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
