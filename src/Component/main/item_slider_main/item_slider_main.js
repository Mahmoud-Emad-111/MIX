import React from 'react'
import './item_slider_main.css'
export default function Item_slider_main({data}) {
    return (
    <div className='item_slider_main' style={{background:data.background}}>
        <div className='item_slider_main_left'>
          <h2 style={{color:data.color_text}}>{data.title}</h2>
          <button type="">Buy now</button>
        </div>
        <div className='item_slider_main_right'>
          <img src={data.img} alt=""/>
        </div>
    </div>
  )
}
