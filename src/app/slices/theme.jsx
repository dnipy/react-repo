import { createSlice } from "@reduxjs/toolkit";


export const darkTheme = createSlice({
    name:"darkTheme",
    initialState:{
        darkTheme : false
    },
    reducers :{
        active : (state)=>{
            state.darkTheme = !state.darkTheme
        }
    }
})

export const { active } = darkTheme.actions
export default darkTheme.reducer