import React from 'react'
const Dummy = {
    "_id": "64dfe77d50961c55ce93e7e0",
    "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1692395388/A2sv/vmjzxwgp3mdvtwn2tlrw.jpg",
    "title": "Mastering the Art of Code Refactoring",
    "description": "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    "author": null,
    "isPending": true,
    "tags": [
      "Programming",
      "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [],
    "createdAt": "2023-08-18T21:49:49.752Z",
    "updatedAt": "2023-08-18T21:49:49.752Z",
    "__v": 0
  }


const Card = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex gap-3'>
            {/* header */}

            <div className=''>
                <img src="./sd" alt='pp'/>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center gap-[1rem]'>

                    <h1 className="text-[24.4px] font-[600]">{Dummy.author}Yiddita Kebede</h1>
                    <p className='text-[19.1px] text-[#868686] font-[500]'>.</p>
                    <p className='text-[19.1px] text-[#868686] font-[500]'>{Dummy.createdAt}</p>
                </div>
                <p className='text-[19.1px] text-[#868686] font-[500]'>SOFTWARE ENGINEERING</p>
            </div>
        </div>
        <div className='flex'>
            {/* description */}
            <div className='w-[60%]'>
                <h1 className='font-[700] text-[34.21px]'>{Dummy.title}</h1>
                <p className='text-[19.1px] text-[#868686] font-[500]'>{Dummy.description}</p>
            </div>
            <div className='w-[40%]'>
                <div className='w-[450px]'>

                <img
                    className='w-[450px] rounded-[12px]'
                    src = {Dummy.image}
                />
                </div>
            </div>
        </div>
        <div >
            <div className='flex gap-[1rem]'>   

            {Dummy.tags.map((tag,index)=>(
                <p key={index.toString()} className='bg-[#D9D9D9] text-[#8E8E8E] p-[0.5rem] rounded-[122px]'>{tag}</p>          
            ))}
            </div>
            
        </div>

    </div>
  )

}
export default Card