import React from 'react'
import Card from '../card/Card'
const Blog = () => {
  return (
    <div className='grid items-center justify-center w-[100lvw] pl-[6rem] gap-[3rem] '>
      <div className='w-[100lvw] flex items-center justify-between   '>
        <h2 className='text-[32px] font-[600]'>Blogs</h2>
        <div className='self-center flex gap-[2rem] h-[50px]'>
          <input placeholder='Search' className='rounded-[100px] pl-[1rem] border-[1px] h-[100%] w-[300px]'/>
          <button className='text-[16px] font-[600] bg-[#264FAD] rounded-[100px]  p-[0.8rem] text-[white]'>+ New Blog</button>

        </div>
        <div></div>
      </div>
      <div>
        <Card/>
      </div>
    </div>
  )
}

export default Blog