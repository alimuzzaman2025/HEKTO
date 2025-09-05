import React from 'react'
import Container from './Container'
import { CiMail, CiUser } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { GiSelfLove } from 'react-icons/gi'
import { BsCart } from 'react-icons/bs'

const Header = () => {
    return (
        <div className='bg-[#7E33E0]'>
            <Container>
                <div className='flex justify-between items-center text-[#fff] font-josefin font-semibold text-[12px] p-2'>
                    <div className='flex items-center gap-12'>
                        <div className='flex items-center'>
                            <CiMail />
                            <p className='pl-2'>mhhasanul@gmail.com</p>
                        </div>
                        <div className='flex items-center'>
                            <FiPhone />
                            <p className='pl-2'>(12345)67890</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='items-center'>
                            <select name="" id="">
                                <option value="">English:</option>
                                <option value="">Bangla:</option>
                            </select>
                        </div>
                        <div className='items-center'>
                            <select name="" id="">
                                <option value="">USD:</option>
                                <option value="">BDT:</option>
                            </select>
                        </div>
                        <div className='flex items-center gap-1'>
                            <a href="#">Login </a>
                            <a href=""><CiUser /></a>
                        </div>
                        <div className='flex items-center'>
                            <div className='flex items-center gap-1'>
                                <div className=''>Wishlist</div>
                                <div className=''><GiSelfLove /></div>
                            </div>
                            <div className='pl-4'><BsCart /></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header

