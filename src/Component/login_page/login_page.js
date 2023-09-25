import { EyeIcon } from "@heroicons/react/24/solid";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './login_page.css';
import { useForm } from "react-hook-form";
import Cookies from 'react-cookies';

// import { get_data_user, set_data_user } from "../../backend_data/user";
import   {useNavigate}  from "react-router-dom";
import http from "../axios/http";
import { set_data_user } from "../user/user";


const Login_page=()=>{
    const navigate = useNavigate();
    useEffect(() => {
        if(Cookies.load('token')){
          navigate("/profile")
        }
      }, []);
    
    const [data_error, setdata_error] = useState(['']);
    const [type,settype]=useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handel_password=()=>{
        settype(!type)
    }
    const handel_login= async(data)=>{
        // if(localStorage.getItem('backend')=='true'){
            // await http.post('login',data).then(res=>{
        //         if (res.status==200) {
        //         http.defaults.headers.common = {'Authorization': `Bearer ${res.data.data.token}`}
        //             set_data_user(res.data);
        //             navigate('/profile');
        //             window.location.reload();
        //         }
        //     }
        //     )    .catch(error => {
        //         if(error.response.data.message=='Unauthoriset'){
        //             setdata_error(true);
        //         }
        //     });
        // }else{
        //     localStorage.setItem('Email', data.email)
        //     localStorage.setItem('isLogin', true)
        //     navigate('/profile');
        //     window.location.reload();
        // }
        await http.post('Login',data).then(res=>{
            // console.log(res.data.data);
            //  set_data_user(res.data);
            Cookies.save('token', res.data.data.token);
            navigate('/');

            
            
        }).catch(errors=>{
            if (errors.response.data.succes==false) {
                setdata_error(errors.response.data.message.password);
            }if(errors.response.status===401){
                setdata_error('Please check your data and try again');
            }
            
        })
    }
    return(
        <div className="login_page">
            <div className="top">
                <h1>Login</h1>
            </div>
            <div className="main">
                <form onSubmit={handleSubmit(handel_login)}>
                    <div className="form">
                        <div className="input_form">
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="Email" {...register('email',{required:'Email is Required',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}/>
                                {errors.email && <p className="error">{errors.email.message}</p>}

                            </div>                            
                            <div className="input_form password">
                                <label htmlFor="password">password</label>
                                <input type={type==true ? 'text': "password" } name="password" placeholder="Password" {...register('password',{required:'password is Required'})} />
                                {errors.password && <p className="error">{errors.password.message}</p>}
                                
                                <EyeIcon onClick={handel_password}/>
                                
                            </div>
                        {data_error ==''?'': <p className="error_email">{data_error}</p>}
                    <button type="submit">login</button>
                    </div>
                </form>
                
                <div className="link_create_account">

                <Link  to='/singin'>create new account</Link>
                </div>

            </div>
        </div>
    )
}
export default Login_page;
