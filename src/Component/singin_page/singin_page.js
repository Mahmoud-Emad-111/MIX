import react, { useState ,  useRef,useEffect } from "react";
import './singin_page.css';
import { EyeIcon} from "@heroicons/react/24/solid";
// import http  from "../axios/http";
import   {useNavigate}  from "react-router-dom";
import { useForm } from "react-hook-form";
import Cookies from 'react-cookies';
import {ImUpload} from "react-icons/im";

import avtar from './avtar.jpg'
import http from "../axios/http";
const Singin_page=()=>{
    
    const [file, setfile] = useState(false);

    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const navigate = useNavigate();
    const [type,settype]=useState(false);
    
    useEffect(() => {
        if(Cookies.load('token')){
          navigate("/profile")
        }
      }, []);
    
    
    
    const login=async(data)=>{
        data.image=file;
        await http.post('Register',data).then(res=>{
            
            Cookies.save('token', res.data.data.token);
            navigate('/');


        }).catch(error=>{
            console.log(error);
        })



    }
    const handel_password=()=>{
        settype(!type)
    }

    return(
        <div className="singin_page">
            <div className="top">
                <h1>create new account</h1>
                
            </div>
            <div className="singin_main">
            <div class="left">
                <img src={file ? URL.createObjectURL(file): avtar} alt=""/>

            </div>

                <div className="right">
                    <form onSubmit={handleSubmit(login)} >
                        <div className="input_form_image">
                            <label htmlFor="file" className="label_file"> image: <ImUpload className="upload"/></label>
                            <input type="file"  name="image"  id="file" onChange={e=>setfile(e.target.files[0])} style={{display:"none"}}/>
                        </div>
                        <div className="form">
                            <div className="input_form">
                                <label htmlFor="full_name">Full Name</label>
                                <input type="text" name="name"  placeholder="Full Name" {...register('name',{required:'Name is Required'})}/>
                                {errors.name && <p className="error">{errors.name.message}</p>}
                            </div>                            
                            <div className="input_form">
                                <label htmlFor="email">email</label>
                            <input type="text" name="email" placeholder="Email"  {...register('email',{required:'Email is Required',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}/>
                            {errors.email && <p className="error">{errors.email.message}</p>}
                            </div>                            
                            <div className="input_form password">
                                <label htmlFor="password">password</label>
                                <input type={type===true ? 'text': "password" }  name="password" placeholder="Password" {...register('password',{required:'password is Required'})}/>
                                <EyeIcon onClick={handel_password}/>

                                {errors.password && <p className="error">{errors.password.message}</p>}
                            </div>
                            <div className="input_form password">
                                <label htmlFor="user_name">confirm password</label>
                                <input type={type===true ? 'text': "password" }  name="confirm_password" placeholder="confirm password" {...register('confirm_password',{required:'confirm password is Required',
                                validate:value =>
                                    value === password.current || "The passwords do not match"
                                })}/>
                                <EyeIcon onClick={handel_password}/>
                                {errors.confirm_password && <p className="error">{errors.confirm_password.message}</p>}
                            </div>

                            <button type="submit"  value="Submit">singin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Singin_page;
{/* <input type="text" name="name"  placeholder="Full Name" value={data.name} onChange={(e)=>setdata({...data,'name':e.target.value})}/> */}
