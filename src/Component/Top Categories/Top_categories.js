import React from 'react'
import './Top_categories.css';
import hoodie from '../../assets/clothes/30-1.png';
import shirts_bans from '../../assets/clothes/27-1.png';
import shirts_bans_white from '../../assets/clothes/shirt bans white.webp';

export default function Top_categories() {
  return (
    <div className='top_categories'>
        <h2>Top categories</h2>
        <div className='categories_content'>
            <div className='c_c_left c_c_item'>
                <h4>Adorkable White Text Typography Hoodie</h4>
                <div className='c_c_r_image'>
                  
                <img src={shirts_bans_white} alt=""/>    
                </div>
            </div>
            <div className='c_c_right'>
              <div className='c_c_r_top'>
              <div className='c_c_r_c_item c_c_item'>
              <h4>shite barca</h4>
                <div className='c_c_r_image'>
                  <img src={shirts_bans} alt=""/>
                </div>
              </div>
              <div className='c_c_r_c_item c_c_item'>
              <h4>shite barca</h4>
                <div className='c_c_r_image'>
                  <img src={shirts_bans} alt=""/>
                </div>
              </div>
              
              </div>
              <div className='c_c_r_bottom c_c_item'>

                  <h4>shite barca</h4>
                  <div className='c_c_r_image'>
                    <img src={hoodie} alt=""/>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}
