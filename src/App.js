import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/footer';
import { Route,BrowserRouter, Routes } from "react-router-dom";
import Product_Details from './Component/Products/Product_Details/Product_Details';
import Nav_bar from './Component/Nav_Bar/Nav_bar';
import Login_page from './Component/login_page/login_page';
import Singin_page from './Component/singin_page/singin_page';
import { Profiler } from 'react';
import Profile from './Component/profile/profile';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Routes>

        <Route element={<Home/>} exact path='/'/>
        
        <Route element={<Product_Details/>}  path='/Product-details/:id'/>
        <Route element={<Login_page/>}  path='/Login'/>
        <Route element={<Singin_page/>}  path='/singin'/>
        <Route element={<Profile/>}  path='/profile'/>

      </Routes>
    
    </div>
      </BrowserRouter>
  );
}

export default App;
