'use client'
import React, { useState } from 'react';
import Card from './components/card/Card';
import Description from './components/description/Description';
import { useGetAllBlogQuery } from '@/lib/service/BlogService';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

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

const Page = () => {
  const [isCardClicked, setIsCardClicked] = useState<boolean>(true);
  const [selectedId, setSelectedId] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(5);

  const { data, isLoading, isError } = useGetAllBlogQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  // Calculate the index of the first and last card to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle next button click
  const handleNext = () => {
    if (indexOfLastCard < data.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      
      {isCardClicked ? (
        <div className='grid items-center justify-center w-full gap-12'>
          <div className='w-full flex items-center justify-between p-4'>
            <h2 className='text-2xl font-bold'>Blogs</h2>
            <div className='flex gap-8 items-center h-[3rem]'>
              <input placeholder='Search' className='rounded-full pl-4 border h-full w-72' />
              <button className='text-base font-semibold bg-[#264FAD] rounded-full p-2 text-white'>+ New Blog</button>
            </div>
            <div>{""}</div>
          </div>
          <div className='flex flex-col gap-4 p-4'>
            {currentCards.map((item: CardData) => (
              <div
                key={item._id}
                onClick={() => { setSelectedId(item._id); setIsCardClicked(false); }}
                className="cursor-pointer shadow-md hover:shadow-xl border rounded-2xl p-4"
              >
                <div className='flex flex-col items-center justify-between'>
                  <Card id={item._id} />
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-between p-4'>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className='bg-[#264FAD] text-white rounded-full px-4 py-2'
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={indexOfLastCard >= data.length}
              className='bg-[#264FAD] text-white rounded-full px-4 py-2'
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className='p-4'>
          <div onClick={()=>setIsCardClicked(true)} className=' w-[3rem] text-[#7c7a7a] h-[3rem] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl border cursor-pointer '>
            <FaArrowLeft />
          </div>
          <Description id={selectedId} />
        </div>
      )}
    </div>
  );
}

export default Page;
