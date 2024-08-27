import React from 'react';
import Image from 'next/image';

const Data = {
  "_id": "64dfe9dd50d83607285ffa10",
  "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1692395995/A2sv/c6fnsnngdrjrrvxv8xos.jpg",
  "title": "Mastering the Art of Code Refactoring 2",
  "description": "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
  "author": {
    "_id": "64dfe6fb50961c55ce93e7de",
    "name": "Bruk Mekonen",
    "email": "bruk@gmail.com",
    "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1684307248/Portfolio/dgxjqlgpys1imwnw2bhq.png",
    "role": "user"
  },
  "isPending": true,
  "tags": [
    "Programming",
    "Code"
  ],
  "likes": 0,
  "relatedBlogs": [],
  "skills": [
    "Web Development",
    "Mobile"
  ],
  "createdAt": "2023-08-18T21:59:57.206Z",
  "updatedAt": "2023-08-18T21:59:57.206Z",
  "__v": 0
};

const Description = () => {
  return (
    <div className='pb-[1rem] mt-[6rem]'>
      <div className='flex flex-col gap-[2rem] items-center'>
        <div className='grid items-center justify-center'>
          <h1 className='text-[48px] font-[400]'>{Data.title}</h1>
          <p className='text-center font-[300] text-[16px]'>PROGRAMMING.TECH | + MIN READ</p>
        </div>
        <div className='flex items-center justify-center'>
          <Image src={Data.image.toString()} alt="image" width={1300} height={1000}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-[1rem]'>
          <div className='rounded-[100px] overflow-hidden bg-[#bebebe]'>
            <Image src={Data.author.image.toString()} alt="author-image" width={60} height={30}/>
          </div>
          <p className='text-[16px] font-[400]'>{Data.author.name.toUpperCase()} | SOFTWARE</p>
          <p className='cursor-pointer text-[#264FAD]'>{"@" + Data.author.name.toUpperCase().replace(/ /g, "_")}</p>
        </div>
        <div className='w-[70%]'>
          <h1 className='font-[400] text-[40px]'>{Data.description.slice(0, Math.floor(Data.description.length * 0.25))}</h1>
          <p className='font-[400] text-[24px]'>{Data.description.slice(Math.floor(Data.description.length * 0.25))}</p>
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
