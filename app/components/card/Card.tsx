import React, { useEffect } from 'react'
import { useGetBlogByIdQuery } from '@/lib/service/BlogService';
import Image from 'next/image';

interface CardData {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: string | null;
    isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: any[]; 
    skills: string[];
    createdAt: string;
    updatedAt: string;
  }
  

const Card = ({id}:{id:string}) => {
    const {data , isLoading, isError} = useGetBlogByIdQuery({id})
    useEffect(()=>{},[data,isLoading,isError])
    console.log("myData",data)
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
        <div className='flex flex-col'>
            <div className='flex gap-3'>
                {/* header */}
                <div className='rounded-[100px] overflow-hidden bg-[#bebebe]'>
          {data.author?.image ? (
            <Image src={data.author.image} alt="author-image" width={60} height={30} />
          ) : (
            <div>No Image</div>
          )}
        </div>
                <div className='flex flex-col'>
                <div className='flex items-center gap-[1rem]'>
  <h1 className="text-[24.4px] font-[600]">{data.author?.name || "Yiddita Kebede"}</h1>
  <p className='text-[19.1px] text-[#868686] font-[500]'>.</p>
  <p className='text-[19.1px] text-[#868686] font-[500]'>
    {new Date(data.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
  </p>
</div>

                    <p className='text-[19.1px] text-[#868686] font-[500]'>SOFTWARE ENGINEERING</p>
                </div>
            </div>
            <div className='flex'>
                {/* description */}
                <div className=''>
                    <h1 className='font-[700] text-[25px]'>{data.title}</h1>
                    <div>

                    <p className='text-[19.1px] text-[#868686] font-[500] w-[40rem]'>{data.description}</p>
                    </div>
                </div>
                <div className='w-[40%]'>
                    <div className='w-[450px]'>
                        <img
                            className='w-[450px] rounded-[12px]'
                            src={data.image}
                            alt="Blog image"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex gap-[1rem]'>   
                    {data.tags.map((tag:string,index:number)=>(
                        <p key={index.toString()} className='bg-[#D9D9D9] text-[#8E8E8E] p-[0.5rem] rounded-[122px]'>{tag}</p>          
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Card