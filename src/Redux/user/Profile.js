import { createSlice } from "@reduxjs/toolkit";

export const Profile=createSlice({
    name:'Profile',
    initialState:{
        name:'',
        email:'',
        image:'',
    },
    reducers:{
        sed_data_user:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.image=action.payload.image;
        },

    }
})
export const {sed_data_user}=Profile.actions;
export default Profile.reducer;