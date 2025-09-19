import React, { useContext } from 'react'
import Container from './Container'
import Slider from 'react-slick'
import { HiHeart } from 'react-icons/hi'
import { IoGitCompareSharp } from 'react-icons/io5'
import { FaSearchPlus, FaShoppingCart } from 'react-icons/fa'
import { ApiData } from './ContextApi'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-[50%] right-[30px] bg-[red] w-[40px] h-[40px] leading-[40px] rounded-full text-center text-[#fff] translate-y-[-50%] cursor-pointer"

            onClick={onClick}
        >
            <GrFormNext className="inline-block" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="absolute top-[50%] left-[0px] bg-[red] w-[40px] h-[40px] leading-[40px] rounded-full text-center text-[#fff] translate-y-[-50%] cursor-pointer z-[1]"

            onClick={onClick}
        >
            <GrFormPrevious className="inline-block" />
        </div>
    );
}

const Featureproducts = () => {
    let data = useContext(ApiData)
    let ProductSlice = {
        dots:true,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <div className='py-36 '>
            <Container>
                <h2 className='font-josefin font-bold text-[36px] text-[#262626] text-center pb-10'>Feature Products</h2>

                <div className=''>
                    <Slider {...ProductSlice}>
                       
                        {data.map((item) => (
                            
                            <div className='w-[24%] pr-8'>
                                <div className='relative group '>

                                    <Link to="/ShopGrid">
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

                                <div className='bg-[#2F1AC4] p-3 py-6'>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='text-[#fff]'>{item.title}</h2>
                                        <p className='text-[yellow] text-[14px] font-josefin font-normal'>$ {item.price}</p>
                                    </div>
                                        <p className='text-[red] text-[16px] font-josefin font-normal'>Stock  {item.stock}</p>
                                </div>
                            </div>
                           
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default Featureproducts
