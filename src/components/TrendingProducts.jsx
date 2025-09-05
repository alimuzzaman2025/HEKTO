import React from 'react'
import Container from './Container'
import chair1 from "../assets/trndchair1.png"
import chair2 from "../assets/trndchair2.png"
import chair3 from "../assets/trndchair3.png"
import chair4 from "../assets/trndchair4.png"
import Shopnow from "../assets/shopnow.png"
import Vewcolltion from "../assets/vewcolltion.png"
import Exchair1 from "../assets/exectivechair1.png"
import Exchair2 from "../assets/exectivechair2.png"
import Exchair3 from "../assets/exectivechair3.png"

const TrendingProducts = () => {
    return (
        <div>
            <Container>
                <h2 className='pt-[126px] font-josefin font-bold text-[36px] text-[#262626] text-center pb-10'>Trending Products</h2>
                <div className='flex justify-between flex-wrap object-cover  items-center'>
                    
                    <div className='w-21% shadow-2xl bg-[#fff] p-4'>
                        <div className="p-12 bg-[#F5F6F8]">
                            <img src={chair1} alt="" />
                        </div>
                        <div className='bg-[#fff] py-5 text-center'>
                            <h2 className='text-[#151875] font-bold text-[16px] font-lato  pt-[15px]'>Cantilever chair</h2>
                            <div className='flex gap-4 justify-center py-3'>
                                <h2 className='text-[#151875] font-bold'>$26.00</h2>
                                <del className='text-[#151875] font-light'>$42.00</del>
                            </div>
                        </div>
                    </div>
                    <div className='w-21%  shadow-2xl bg-[#fff] p-4'>
                        <div className="p-10 bg-[#F5F6F8]">
                            <img src={chair2} alt="" />
                        </div>
                        <div className='bg-[#fff] py-5 text-center'>
                            <h2 className='text-[#151875] font-bold text-[16px] font-lato  pt-[15px]'>Cantilever chair</h2>
                            <div className='flex gap-4 justify-center py-3'>
                                <h2 className='text-[#151875] font-bold'>$26.00</h2>
                                <del className='text-[#151875] font-light'>$42.00</del>
                            </div>
                        </div>
                    </div>
                    <div className='w-21%  shadow-2xl bg-[#fff] p-4'>
                        <div className="p-10 bg-[#F5F6F8]">
                            <img src={chair3} alt="" />
                        </div>
                        <div className='bg-[#fff] py-5 text-center'>
                            <h2 className='text-[#151875] font-bold text-[16px] font-lato  pt-[15px]'>Cantilever chair</h2>
                            <div className='flex gap-4 justify-center py-3'>
                                <h2 className='text-[#151875] font-bold'>$26.00</h2>
                                <del className='text-[#151875] font-light'>$42.00</del>
                            </div>
                        </div>
                    </div>
                    <div className='w-21%  shadow-2xl bg-[#fff] p-4'>
                        <div className="p-4 bg-[#F5F6F8] py-9">
                            <img src={chair4} alt="" />
                        </div>
                        <div className='bg-[#fff] py-5 text-center'>
                            <h2 className='text-[#151875] font-bold text-[16px] font-lato '>Cantilever chair</h2>
                            <div className='flex gap-4 justify-center p-3'>
                                <h2 className='text-[#151875] font-bold'>$26.00</h2>
                                <del className='text-[#151875] font-light'>$42.00</del>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex pb-[126px] pt-10'>
                    <div className='w-1/3'>
                        <img src={Shopnow} alt="" />
                    </div>
                    <div className='w-1/3'>
                        <img src={Vewcolltion} alt="" />
                    </div>
                    <div className='w-1/3 pt-7'>
                        <div className=''>
                            <img src={Exchair1} alt="" />
                        </div>
                        <div className='py-4'>
                            <img src={Exchair2} alt="" />
                        </div>
                        <div className=''>
                            <img src={Exchair3} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TrendingProducts