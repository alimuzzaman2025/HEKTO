import React from 'react'
import { FaSearchPlus, FaShoppingCart } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Post = ({ info }) => {
   

    return (
        <>
            <div className='flex flex-wrap justify-between pb-10' id="Post">
            {info.map((item) => (
                <div className='w-[23%] mb-15 border-0 border-[#262626] shadow-2xl '>
                    <div className='relative group '>
                        <Link>
                            <img src={item.thumbnail} alt="" />
                        </Link>
                        <div className='absolute left-0 top-0 w-full  '>
                            <ul className='flex pl-8 pt-4 pb-4'>
                                <li className='items-center '><FaShoppingCart /></li>
                                <li className='items-center px-5'><HiHeart /></li>
                                <li className=''><FaSearchPlus /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-between bg-[#2F1AC4] p-4'>
                        <div className='text-[#fff]'>
                            <h2 className='text-[16px] '>{item.title}</h2>
                            <p className='text-[red] text-[16px] gap-4'>Stock  {item.stock}</p>
                        </div>
                        <p className='text-[Yellow]'>${item.price}</p>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default Post




