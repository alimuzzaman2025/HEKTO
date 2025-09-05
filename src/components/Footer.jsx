import React from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import { IoSearchOutline } from 'react-icons/io5'
import Fb from "../assets/fb.png"
import Instagram from "../assets/instagrm.png"
import Twtr from "../assets/twter.png"

const Footer = () => {
    return (
        <section className='bg-[#EEEFFB] py-20'>
            <div>
                <Container>
                    <div className='flex justify-between pb-20'>
                        <div className='2/5'>
                            <ul>
                                <li className='pb-8'><img src={Logo} alt="" /></li>
                                <li className='relative inline-block items-center'>
                                    <input className="w-full pl-2 pr-10 bg-[rgba(248,247,247,0.66)] py-1" type="search" placeholder='Enter Email Address' />
                                    <div className='absolute top-[0%] right-0  bg-[#FB2E86] w-[30%] h-full pt-3'>
                                        <IoSearchOutline className='absolute top-[30%] right-4 traslate-y-[-50%] text-[#fff]' />
                                    </div>
                                </li>
                                <li className='pt-8'>Contact Info</li>
                                <li>17 Princess Road, London, Greater London NW1 8JR, UK</li>
                            </ul>
                        </div>
                        <div className='w-1/5'>
                            <ul>
                                <li className='font-josefin pb-8 font-bold text-[16px] text-[#000000]'>Catagories</li>
                                <li>Laptops & Computers</li>
                                <li className='py-1'>Cameras & Photography</li>
                                <li className='py-1'>Smart Phones & Tablets</li>
                                <li className='py-1'>Video Games & Consoles</li>
                                <li>Waterproof Headphones</li>
                            </ul>
                        </div>
                        <div className='w-1/5'>
                            <ul>
                                <li className='font-josefin pb-8 font-bold text-[16px] text-[#000000]'>Customar Care</li>
                                <li>My Account</li>
                                <li className='py-1'>Discount</li>
                                <li className='py-1'>Returns</li>
                                <li className='py-1'>Orders History</li>
                                <li>Order Tracking</li>
                            </ul>
                        </div>
                        <div className='w-1/5'>
                            <ul>
                                <li className='font-josefin pb-8 font-bold text-[16px] text-[#000000]'>Pages</li>
                                <li>Blog</li>
                                <li className='py-1'>Browse the Shop</li>
                                <li className='py-1'>Category</li>
                                <li className='py-1'>Pre-Built Pages</li>
                                <li className='py-1'>Visual Composer Elements</li>
                                <li>WooCommerce Pages</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='flex justify-between px-10 bg-[#9485e9e1] items-center py-1'>
                <div>
                    <h2 className='pl-50'>©Webecy - All Rights Reserved</h2>
                </div>
                <div className='flex gap-4 pr-70 '>
                    <div className=''>
                        <img src={Fb} alt="" />
                    </div>
                    <div className=''>
                        <img src={Instagram} alt="" />
                    </div>
                    <div className=''>
                        <img src={Twtr} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer



