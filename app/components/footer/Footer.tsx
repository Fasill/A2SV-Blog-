import React from 'react'
import asset from "@/assets/index"
import Image from 'next/image'
import {FaRegCopyright} from "react-icons/fa6";
import {FaTwitter} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import {FaYoutube} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <div className='flex justify-between items-center  p-[5rem] border '>

            <div  className='w-[20%]'>
            <Image src={asset.footer} alt="footerIcon" />
            </div>
            <div className='w-[20%]'>
                <h1 className='font-[600] text-[24px]'>
                    Get involved in improving tech Education in Africa
                </h1>
                <button className='bg-[#264FAD] rounded-[10px] h-[59px] w-[160px] text-white flex items-center justify-center cursor-pointer'>
                    Support Us
                </button>
            </div>
            <div className='flex justify-between w-[60%] text-[22px]'>
                <ul className='text-[22px] font-[300]'>
                    <li className='font-[600]'>links</li>
                    <li>Home</li>
                    <li>Success Stories</li>
                    <li>About Us</li>
                    <li>Get involved</li>

                </ul>
                <ul className='text-[22px] font-[300]'>
                    <li className='font-[600]'>Teams</li>
                    <li>Board Members</li>
                    <li>Advisors</li>
                    <li>Executives</li>
                    <li>Staffs</li>

                </ul>
                <ul className='text-[22px] font-[300]'>
                    <li className='font-[600]'>Blogs</li>
                    <li>Recent Blogs</li>
                    <li>New Blogs</li>
            

                </ul>
            </div>
        </div>
        <div  className='flex justify-between items-center px-20 py-10'>
            <div className='flex items-center justify-center gap-2 text-[#9CA3AF]'><FaRegCopyright/><p>2024 Africa To Silicon Valley.inc All right reserved</p></div>
            <ul className='flex gap-4'>
                <li><FaTwitter size = {28} color='#9CA3AF'/></li>
                <li><FaFacebook size = {28} color='#9CA3AF'/></li>
                <li><FaInstagram size = {28} color='#9CA3AF'/></li>
                <li><FaLinkedin size = {28} color='#9CA3AF'/></li>
                <li><FaYoutube size = {28} color='#9CA3AF'/></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer