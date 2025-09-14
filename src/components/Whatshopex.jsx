import React from 'react'
import Container from './Container'
import Dvan from "../assets/delivery-van.png"
import Cback from "../assets/cashback 1.png"
import Pqlty from "../assets/premium-qlty.png"
import Support from "../assets/24-hours-support 1.png"


const Whatshopex = () => {
    return (
        <div>
            <Container>
                <div>
                    <h2 className='font-josefin font-bold text-[42px] text-[#151875] text-center'>What Shopex Offer!</h2>
                </div>
                <div className='flex justify-between py-20'>
                    <div className='w-1/4 shadow-2xl py-16'>
                        <div className='flex justify-center pt-6'>
                            <img src={Dvan} alt="" />
                        </div>
                        <div className='flex justify-center'>
                            <h2 className='pt-5 text-center font-lato text-[16px] font-bold'>24/7 Support</h2>
                        </div>
                        <div className=''>
                            <p className='p-10 text-center font-lato text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                    <div className='w-1/4 shadow-2xl py-16'>
                        <div className='flex justify-center'>
                            <img src={Cback} alt="" />
                        </div>
                        <div className='flex justify-center'>
                            <h2 className='pt-5 text-center font-lato text-[16px] font-bold'>24/7 Support</h2>
                        </div>
                        <div className=''>
                            <p className='p-10 text-center font-lato text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                    <div className='w-1/4 shadow-2xl py-16'>
                        <div className='flex justify-center'>
                            <img src={Pqlty} alt="" />
                        </div>
                        <div className='flex justify-center'>
                            <h2 className='pt-5 text-center font-lato text-[16px] font-bold'>24/7 Support</h2>
                        </div>
                        <div className=''>
                            <p className='p-10 text-center font-lato text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                    <div className='w-1/4 shadow-2xl py-16'>
                        <div className='flex justify-center'>
                            <img className="" src={Support} alt="" />
                        </div>
                        <div className='flex justify-center'>
                            <h2 className='pt-5 text-center font-lato text-[16px] font-bold'>24/7 Support</h2>
                        </div>
                        <div className=''>
                            <p className='p-10 text-center font-lato text-[16px] font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Whatshopex