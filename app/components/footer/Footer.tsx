import React from 'react'
import asset from "@/assets/index"
import Image from 'next/image'
import { FaRegCopyright } from "react-icons/fa6";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center p-10 md:p-20 border">
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <Image src={asset.footer} alt="footerIcon" />
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="font-semibold text-xl md:text-2xl mb-4">
            Get involved in improving tech Education in Africa
          </h1>
          <button className="bg-[#264FAD] rounded-lg h-12 w-40 text-white flex items-center justify-center cursor-pointer">
            Support Us
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-3/5 text-lg">
          <ul className="text-lg font-light mb-8 md:mb-0 md:mr-8">
            <li className="font-semibold mb-2">Links</li>
            <li>Home</li>
            <li>Success Stories</li>
            <li>About Us</li>
            <li>Get involved</li>
          </ul>
          <ul className="text-lg font-light mb-8 md:mb-0 md:mr-8">
            <li className="font-semibold mb-2">Teams</li>
            <li>Board Members</li>
            <li>Advisors</li>
            <li>Executives</li>
            <li>Staffs</li>
          </ul>
          <ul className="text-lg font-light">
            <li className="font-semibold mb-2">Blogs</li>
            <li>Recent Blogs</li>
            <li>New Blogs</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-8">
        <div className="flex items-center justify-center gap-2 text-[#9CA3AF] mb-4 md:mb-0">
          <FaRegCopyright />
          <p>2024 Africa To Silicon Valley, Inc. All rights reserved</p>
        </div>
        <ul className="flex justify-center md:justify-start gap-4">
          <li><FaTwitter size={28} color='#9CA3AF' /></li>
          <li><FaFacebook size={28} color='#9CA3AF' /></li>
          <li><FaInstagram size={28} color='#9CA3AF' /></li>
          <li><FaLinkedin size={28} color='#9CA3AF' /></li>
          <li><FaYoutube size={28} color='#9CA3AF' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
