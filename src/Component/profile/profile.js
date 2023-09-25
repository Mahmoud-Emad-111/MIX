import Nav_bar from "../Nav_Bar/Nav_bar";
import mahmoud_image from './mahmoud.png';
import './profile.css'
import { AiOutlineMail } from "react-icons/ai";
import { BiLogOutCircle, BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router";
import Cookies from 'react-cookies';
import { useEffect } from "react";
import axios from "axios";
import http from "../axios/http";
import { useDispatch, useSelector } from "react-redux";
import { sed_data_user } from "../../Redux/user/Profile";


export default  function  Profile() {
    const navigate = useNavigate();
    const state_profile=useSelector(state=> state.Profile);
    const dispatch=useDispatch();


    useEffect(() => {

        const token =Cookies.load('token');
        if(!token){
          navigate("/Login")
        }        
        http.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        http.get('profile').then(res=>{
        
            dispatch(sed_data_user(res.data));

        }).catch(error=>{
            console.log(error);
        })    
    

      });
    
      const Logout =()=>{
            Cookies.remove('token')
            navigate('/Login');
        }
       return(
        <>
            <div className="Nav_bar">
                    <Nav_bar/>
            </div>
            <div className="profile container">
                    <div className="top">
                    <div className="details_user">
                        <img src={`http://127.0.0.1:8000/images_users/${state_profile.image}`} alt="" />
                        <div className="profile_content">
                            
                            <h3> <BiUserCircle/> : {state_profile.name}</h3>
                            <span><AiOutlineMail/> : {state_profile.email}</span>
                        </div>
                    </div>
                    <button onClick={Logout} className="logout"><BiLogOutCircle size={20}/> Logout</button>
                </div>
            </div>
        </>
       ) 
}