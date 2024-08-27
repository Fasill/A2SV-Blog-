"use client"
import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useGetBlogByIdQuery } from '@/lib/service/BlogService';


const Description = ({id}:{id:string}) => {
  const {data , isLoading, isError} = useGetBlogByIdQuery({id})
  useEffect(()=>{},[data,isLoading,isError])
  if (isLoading) {
      return <div>Loading...</div>;
    }
  if(isError){
      return <div>Error occurred while fetching data.</div>;
  }
  if (!data){
      return <div>No data available.</div>;
  }
  return (
    <div className='pb-[1rem] mt-[6rem]'>
      <div className='flex flex-col gap-[2rem] items-center'>
        <div className='grid items-center justify-center'>
          <h1 className='text-[48px] font-[400]'>{data.title}</h1>
          <p className='text-center font-[300] text-[16px]'>PROGRAMMING.TECH | + MIN READ</p>
        </div>
        <div className='flex items-center justify-center'>
          <Image src={data.image.toString()} alt="image" width={1300} height={1000}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-[1rem]'>
          <div className='rounded-[100px] overflow-hidden bg-[#bebebe]'>
            <Image src={data.author?.image.toString()} alt="author-image" width={60} height={30}/>
          </div>
          <p className='text-[16px] font-[400]'>{data.author?.name.toUpperCase()} | SOFTWARE</p>
          <p className='cursor-pointer text-[#264FAD]'>{"@" + data.author?.name.toUpperCase().replace(/ /g, "_")}</p>
        </div>
        <div className='w-[70%]'>
          <h1 className='font-[400] text-[40px]'>{data.description.slice(0, Math.floor(data.description.length * 0.25))}</h1>
          <p className='font-[400] text-[24px]'>{data.description.slice(Math.floor(data.description.length * 0.25))}</p>
        </div>
      </div>
      <div className='flex items-center justify-between p-[3rem]'>
        <h1 className='font-[600] text-[35px]'>Related Blogs</h1>
        <h1></h1>
      </div>
    </div>
  );
};

export default Description;
