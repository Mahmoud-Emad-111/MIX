import { configureStore } from "@reduxjs/toolkit";
import  side_bar  from "../Side Bar/side_bar";
import Profile from "../user/Profile";

const store=configureStore({
    reducer:{
        SideBar:side_bar,
        Profile:Profile,
    }
})
export default store