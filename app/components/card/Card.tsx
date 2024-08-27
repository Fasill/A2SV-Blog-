import React from 'react';
import { useGetBlogByIdQuery } from '@/lib/service/BlogService';
import Image from 'next/image';

const Card = ({ id }: { id: string }) => {
    const { data, isLoading, isError } = useGetBlogByIdQuery({ id });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error occurred while fetching data.</div>;
    }
    if (!data) {
        return <div>No data available.</div>;
    }

    return (
        <div className="flex flex-col p-4 md:p-6 lg:p-8">
            <div className="flex flex-col md:flex-row gap-3">
                {/* Header */}
                <div className="rounded-full overflow-hidden bg-[#bebebe] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                    {data.author?.image ? (
                        <Image src={data.author.image} alt="author-image" width={60} height={60} />
                    ) : (
                        <div>No Image</div>
                    )}
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 md:gap-4">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                            {data.author?.name || "Yiddita Kebede"}
                        </h1>
                        <p className="text-sm md:text-base text-[#868686] font-medium">.</p>
                        <p className="text-sm md:text-base text-[#868686] font-medium">
                            {new Date(data.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    </div>
                    <p className="text-sm md:text-base text-[#868686] font-medium">SOFTWARE ENGINEERING</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-4 gap-4">
                <div className="flex-1">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{data.title}</h1>
                    <p className="text-sm md:text-base lg:text-lg text-[#868686] font-medium mt-2">
                        {data.description}
                    </p>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <img
                        className="w-full rounded-lg"
                        src={data.image}
                        alt="Blog image"
                    />
                </div>
            </div>
            <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                    {data.tags.map((tag: string, index: number) => (
                        <p key={index.toString()} className="bg-[#D9D9D9] text-[#8E8E8E] p-2 rounded-full text-xs md:text-sm">
                            {tag}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
