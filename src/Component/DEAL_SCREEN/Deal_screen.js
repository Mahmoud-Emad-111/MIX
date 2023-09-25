import React from 'react'

import Slider from "react-slick";
import { deal_screen_data } from '../../data/data';
import './Deal_screen.css';
export default function Deal_screen() {
    const settings = {
        arrows:true,
        autoplay:false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
    <div className='deal_screen'>
        <div className='container'>
            <Slider {...settings}>
                {
                    deal_screen_data.map((data,index)=>{
                        return <div className='data_screen_content' key={index}>

                            <div className='deal_screen_image'>
                                <img src={data.img} alt=""/>
                            </div>

                            <div className='deal_screen_data'>
                                <h2>{data.title}</h2>
                                <div className='deal_screen_price'>
                                    <span>{data.discound}</span>
                                    <span>{data.price}</span>
                                </div>
                                <button type="button">BUY NOW</button>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </div>
    </div>
  )
}
