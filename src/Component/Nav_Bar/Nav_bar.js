import React from 'react';
import '../Nav_Bar/Nav_bar.css';
import { BiUserCircle } from 'react-icons/bi';
import { IoBagHandleOutline,IoPhonePortraitOutline } from 'react-icons/io5';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { active_side } from '../../Redux/Side Bar/side_bar';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { RiPlaystationFill } from 'react-icons/ri';
import { GiBoots,GiClothes } from 'react-icons/gi';
import { BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';





export default function Nav_bar() {
    const state_bar=useSelector(state=> state.SideBar.active);
    const dispatch=useDispatch();
    const handel_bar=()=>{
        dispatch(active_side())
    }
return (
    <div className='nav_bar'>
        <div className='container'>
            <div className='content_nav'>
                {/* Left_Area */}
                <div className='left_nav'> 
                    <h1 className='f'>MIX</h1>
                    
                </div>
                {/* Left_Area */}

                {/* Mid_Area */}
                <div className='center_nav'>


                </div>
                {/* Mid_Area */}

                {/* Right_Area */}
                <div className='right_nav'> 
                    <form>
                        <input type='text' name='search' placeholder='Search'/>
                        
                    </form>
                    <IoBagHandleOutline/>
                    <Link to='/Login'>
                        <BiUserCircle/> 
                    </Link>
                    <HiOutlineBars3 className='bar' onClick={handel_bar}/>
                    <div className={`nav_links ${state_bar ? 'active_bar' : 'close_bar'}`} >
                        <div className='bar_close'>
                            <RxDoubleArrowLeft onClick={handel_bar}/>
                        </div>
                        <ul>
                            <li><AiOutlineHome/> Home</li>
                            
                            <li><BiCategoryAlt/> All category</li>
                            <li><RiPlaystationFill/> Playstation</li>
                            <li><IoPhonePortraitOutline/> phone</li>
                            <li><GiBoots/> shoes</li>
                            <li><GiClothes/> clothes</li>
                            <li><BsChatSquare/> about</li>
                            
                        </ul>
                    </div>
                </div>
                {/* Right_Area */}

            </div>
        </div>
    </div>
)
}
