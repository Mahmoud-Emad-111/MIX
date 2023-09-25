import React from 'react'
import { popular_sales_data } from '../../data/data';
import './popular_sales.css';
export default function Popular_sales() {
  return (
    <div className='popular_sales'>
        <h2>popular sales</h2>
        <div className='popular_sales_items'>
            {
                popular_sales_data.map((data,index)=>{
                    return <div className='popular_sales_item' key={index}>
                            <div className='popular_item_data'>
                                <span>get {data.sale} off</span>
                                <h3>{data.title}</h3>
                                <button type="buttton">Product Visit</button>
                            </div>
                            <div className='popular_item_image'>
                                <img src={data.img} alt=""/>
                            </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
