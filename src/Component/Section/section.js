import React from 'react'
import { section_data } from '../../data/data';
import './section.css';
export default function Section() {
  return (
    <div className='section'>
      <div className='container'>
        <div className='section_content'>
          {
            section_data.map((data,index)=>{
              return <div className='section_item' key={index}>
                <img src={data.img} alt=""/>
                <h3>{data.title}</h3>
                <p>{data.text}</p>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
