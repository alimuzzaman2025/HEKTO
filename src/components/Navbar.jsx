import React from 'react'
import Container from './Container'
import Logo from '../assets/logo.png'
import { IoSearchOutline } from 'react-icons/io5'

const Navbar = () => {
    return (
        <Container>
            <div className='flex items-center py-4'>
                <div className='w-1/4'>
                    <img src={Logo} alt="" />
                </div>
                <div className='w-2/4 '>
                    <ul className='flex gap-5'>
                        <li><a href="#"><select name="" id=""><option value="">Home</option></select></a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className='w-1/4 items-center'>
                    <div className='relative'>
                        <input className="w-full py-1 px-3 bg-[#D9D9D9]" type="search"/>
                        <div className='absolute top-[0%] right-0  bg-[#FB2E86] w-[15%] h-full'>
                            <IoSearchOutline className='absolute top-[30%] right-4 traslate-y-[-50%] text-[#fff]'/>
                            </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar
