import React from 'react'
import { main_data } from '../../data/data';
import './main.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Item_slider_main from './item_slider_main/item_slider_main';
import Item_right_main from './item_right_main/item_right_main';

export default function Main() {
    const settings = {
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
    <div className='main'>
    {/* ------------Start MAIN CENTER----------------- */}

        <div className='main_center' >
        <Slider {...settings}>
            {
                main_data.main_center.map((data,index)=>{
                    return <Item_slider_main data={data} key={index}/>
                })
            }
        </Slider>
        </div>
    {/* ------------End MAIN CENTER----------------- */}

    {/* ------------ Start MAIN Right----------------- */}

        <div className='main_right'>
            {
                main_data.main_right.map((data,index)=>{
                    return <Item_right_main key={index} data={data}/>
                })
            }
        </div>
    {/* ------------END MAIN Right----------------- */}

    </div>
  )
}
