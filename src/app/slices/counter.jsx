import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },

        decrement:(state)=>{
            state.value -=1
        },

        incrByInput :(state,action)=>{
            state.value += action.payload
        },

        decrByInput :(state,action)=>{
            state.value -= action.payload
        },
        reset : (state)=>{
            state.value = 0
        }
        
    }
})


export const { increment , decrement , incrByInput , decrByInput , reset  } = CounterSlice.actions

export default CounterSlice.reducer