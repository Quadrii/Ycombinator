import { EyeIcon } from 'lucide-react';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {formatDate} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Author, Startup} from "@/sanity/types";


export type StartupCardType = Omit<Startup, "author"> & {author?: Author}

const StartupCard = ({post}:{post:StartupCardType}) => {
    // We can also destructure the startup properties:
    // const {views, author:{_id: authorId, name}, _createdAt, category, _id, image} = startup
    return (
        <li className='bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100 group'>
            <div className='flexed'>
                <p className='font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100 text-black'>
                    {formatDate(post._createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-primary'/>
                    <span className='text-16-medium'>{post.views}</span>
                </div>
            </div>
            <div className='flex flex-between mt-5 gap-5 items-center'>
                <div className='flex-1'>
                    <Link href={`/user/${post.author?._id}`}>
                        <p className='text-16-medium line-clamp-1'>{post.author?.name}</p>
                    </Link>
                    <Link href={`/startup/${post._id}`}>
                        <h3 className='text-26-semibold'>{post.title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${post.author?._id}`}>
                    <Image
                        src='https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt='Image' width={50} height={50} className='rounded-full'/>
                </Link>
            </div>
            <Link href={`/startup/${post._id}`}>
                <p className='font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all'>
                    {post.description}
                </p>
                <img src={post.image} alt='Image' className='w-full h-[164px] rounded-[10px] object-cover'/>
            </Link>
            <div className='flexed mt-5'>
                <Link href={`/?query=${post.category?.toLowerCase()}`} className='block'>
                    <p className='text-16-medium'>
                        {post.category}
                    </p>
                </Link>
                <Button className='rounded-full bg-black font-medium text-[16px] text-white px-5 py-3 !important'
                        asChild>
                    <Link href={`/startup/${post._id}`}>Details</Link>
                </Button>
            </div>
        </li>
    );
};

export default StartupCard;