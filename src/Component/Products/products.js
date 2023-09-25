import React from 'react'
import Slider from "react-slick";
import './products.css';
import { IoBagHandleOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';



export default function Products({data}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 471,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },

        ]
          };
      return (
    
    <div className='products'>
        {
            <Slider {...settings}>
                {
                    data.map((data,index)=>{
                        return <div className='product' key={index}>
                            <div className='product_image'>
                                <img src={data.img} alt=""/>
                            </div>
                            <h4>{data.text}</h4>
                            <div className='product_price'>
                                <span>{data.price}</span>
                                <span><AiFillStar/> {data.rate}</span>
                            </div>
                            <div className='product_buy'>
                              <IoBagHandleOutline/>
                              <button type="button">Buy Now</button>
                            </div>
                        </div>
                    })
                }
            </Slider>
        }
    </div>
  )
}
