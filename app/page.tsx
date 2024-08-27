"use client"
import React from 'react'
import Card from './components/card/Card';
import { useState } from 'react';
import Description from "./components/description/Description"
const page = () => {
  const [isCardClicked,setIsCardClicked] = useState<Boolean>(false)
  return (
    <div>
{  isCardClicked ?  (  <div className='grid items-center justify-center w-[100lvw] gap-[3rem] '>
      <div className='w-[100lvw] flex items-center justify-between  p-[1rem] '>
        <h2 className='text-[32px] font-[600]'>Blogs</h2>
        <div className='self-center flex gap-[2rem] h-[50px]'>
          <input placeholder='Search' className='rounded-[100px] pl-[1rem] border-[1px] h-[100%] w-[300px]'/>
          <button className='text-[16px] font-[600] bg-[#264FAD] rounded-[100px]  p-[0.8rem] text-[white]'>+ New Blog</button>

        </div>
        <div>{""}</div>
      </div>
      <div className='pl-[3rem] pr-[3rem]'>
        <div className="shadow-md hover:shadow-2xl border rounded-[2rem] p-[2rem] ">

          <Card/>
        </div>
        </div>
      </div>)
      :
      (
        <div>
          <Description/>
        </div>
      )
      }
    </div>
    
  )
}

export default page