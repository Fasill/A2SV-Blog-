'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import assets from "@/assets/index";

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
    <nav className='flex items-center justify-between p-4 md:p-[1.6rem] text-[16px] md:text-[20px]'>
      <Image src={assets.logo} alt="Logo" className="w-24 md:w-auto" />

      {/* Hamburger Menu Button for Mobile */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Navigation Links */}
      <div className={`w-full md:flex items-center justify-center ${isMenuOpen ? 'block' : 'hidden'} md:w-full`}>
        <ul className='relative flex flex-col md:flex-row items-center justify-between md:w-[60%] space-y-4 md:space-y-0 mt-4 md:mt-0'>
          {['Home', 'Teams', 'Success Stories', 'About Us', 'Blogs', 'Get Involved'].map((item, index) => (
            <li
              key={index}
              ref={(el: HTMLLIElement | null) => {
                navItemsRef.current[index] = el;
              }}
              className={`text-[#565656] cursor-pointer ${focusedTab === index + 1 && 'text-[#264FAD]'}`}
              onClick={() => setFocus(index + 1)}
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

      {/* Login and Donate Buttons */}
      <ul className='hidden md:flex items-center justify-between w-[22%] mt-4 md:mt-0'>
        <li className="cursor-pointer">Login</li>
        <li className='bg-[#264FAD] rounded-[10px] h-[59px] w-[160px] text-white flex items-center justify-center cursor-pointer'>
          Donate
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
