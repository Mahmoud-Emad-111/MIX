import React from 'react'
import { Top_rate_data } from '../../data/data';
import './top_rate.css';
import { IoBagHandleOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';

export default function Top_rate() {
    
  return (
    <div className='top_rate'>
        <h2>top rate</h2>
        <div className='top_rate_items'>
            {
                Top_rate_data.map((data,index)=>{
                    return <div className='top_rate_item' key={index}>
                        <h3>{data.title}</h3>
                        <div className='rate_item_price'>
                            <span>{data.price}</span>
                            <span><AiFillStar/> {data.rate}</span>
                        </div>
                        <div className='rate_item_buy'>
                            <button type="butto">
                            <IoBagHandleOutline/>

                            </button>
                            <button type="button">Buy Now</button>
                        </div>
                        <div className='rate_item_image'>
                            <img src={data.img} alt=""/>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
