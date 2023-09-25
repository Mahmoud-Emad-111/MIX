import React from 'react'
import './item_right_main.css';
import { AiFillStar } from 'react-icons/ai';

export default function Item_right_main({data}) {
    
    return (
        <div className='item_right_main' style={{background:data.background, boxShadow:data.shadow}}>
            <div className='item_right_data'>
                <h3 className='main_title'>{data.title}</h3>
                <div className='item_right_detalis'>
                    <div className='item_right_price'>
                        <h3>{data.price}</h3>

                    </div>
                    <div className='item_right_rating'>
                        <AiFillStar/>
                        <span>{data.rate}</span>
                    </div>
                </div>
                    <button type="button">Buy Now</button>
            </div>
            <div className='item_right_image'>
                <img src={data.img} alt=""/>
            </div>
        </div>
    )
}
