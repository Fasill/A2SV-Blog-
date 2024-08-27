"use client"
import React, { useEffect } from 'react'
import Card from './components/card/Card';
import { useState } from 'react';
import Description from './components/description/Description';
import { useGetAllBlogQuery } from '@/lib/service/BlogService';
interface CardData {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: string | null;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: any[]; // You might want to define a more specific type for related blogs
  skills: string[];
  createdAt: string;
  updatedAt: string;
}
const page = () => {
  const [isCardClicked,setIsCardClicked] = useState<Boolean>(true)
  const {data, isLoading, isError} = useGetAllBlogQuery({})
  // useEffect(()=>{},[data,isLoading,isError])
  console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  return (
    <div>
      {isCardClicked ? (
        <div className='grid items-center justify-center w-[100lvw] gap-[3rem] '>
          <div className='w-[100lvw] flex items-center justify-between  p-[1rem] '>
            <h2 className='text-[32px] font-[600]'>Blogs</h2>
            <div className='self-center flex gap-[2rem] h-[50px]'>
              <input placeholder='Search' className='rounded-[100px] pl-[1rem] border-[1px] h-[100%] w-[300px]'/>
              <button className='text-[16px] font-[600] bg-[#264FAD] rounded-[100px]  p-[0.8rem] text-[white]'>+ New Blog</button>
            </div>
            <div>{""}</div>
          </div>
          <div className='pl-[3rem] pr-[3rem] flex flex-col gap-[1rem]'>
                {data.map((item: CardData, index: number) => (
                <div id={index.toString()} className="shadow-md hover:shadow-xl border rounded-[2rem] p-[2rem] ">
                  <div className='flex  flex-col items-center justify-between'>
                    <Card id = {item._id} />
                </div>
              </div>
                ))}
          </div>
        </div>
      ) : (
        <div>
          <Description/>
        </div>
      )}
    </div>
  )
}

export default page