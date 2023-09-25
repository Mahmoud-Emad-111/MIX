import { createSlice } from "@reduxjs/toolkit";

export const side_bar=createSlice({
    name:'SideBar',
    initialState:{
        active:false,
    },
    reducers:{
        active_side:(state)=>{
            state.active=!state.active;
        },

    }
})
export const {active_side}=side_bar.actions;
export default side_bar.reducer;