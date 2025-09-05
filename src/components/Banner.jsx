import React from 'react'
import Ban from "../assets/banner.png"
import Slider from 'react-slick';

const Banner = () => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "0%",
          top: "70%",
          transform:"translateY(-50%)",

          

        }}
      >
        <ul className=""style={{ margin: "5px", opacity:1}}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='bg-black p- rounded-full opacity-0 border-0'
        style={{
          width: "20px",
          color: "blue",
          borderRight: "1px #fff solid",
          color: "transparent",
        }}
      >
        0{i + 1}
      </div>
    )
  };
          
          
          
  return (
    <section>
        <Slider {...settings}>
            <div className=''>
                <img src={Ban} alt="" />
            </div>
            <div className=''>
                <img src={Ban} alt="" />
            </div>
            <div className=''>
                <img src={Ban} alt="" />
            </div>
            <div className=''>
                <img src={Ban} alt="" />
            </div>
        </Slider>
    </section>
  )
}

export default Banner