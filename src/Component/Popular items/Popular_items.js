import React from 'react';
import Products from '../Products/products';
import './Popular_items.css';
import { popular_items_data } from '../../data/data';

export default function Popular_items() {
    
  return (
    <div className='popular_items'>
        <h1>Popular items</h1>
        <div className='items'>
            <Products data={popular_items_data}/>
        </div>
    </div>
  )
}
