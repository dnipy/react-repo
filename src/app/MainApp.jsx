import React, { useState } from 'react'
import {  
    increment,
    decrement,
    incrByInput,
    decrByInput,
    reset } from './slices/counter'
import { active } from './slices/theme'    
import { useDispatch,useSelector } from 'react-redux'

function MainApp() {
    const dispatch = useDispatch()
    const count = useSelector( (state)=> state.counter.value)
    const darkMode = useSelector((state)=> state.darkTheme.darkTheme)
    const [inputVal,setInputVal]=useState(0)
    
    return (
        <div className={darkMode?'active main_div':'main_div'}>
            <button className='theme' onClick={()=>dispatch(active())}>Change Theme</button>
            <h1>{count}</h1> 
            
            
            
            <div className='button_group top'>
                <button onClick={()=> dispatch(increment())}
                aria-label="Decrement value">increment</button>
                <button onClick={()=>dispatch(decrement())}
                aria-label="Increment value"
                >decrement</button>
            </div>
            <div className='incr_div'>
                <input  type="number" onChange={(e)=>{setInputVal(e.target.valueAsNumber)} } />
                <br/>
                <div className="button_group ">
                    <button onClick={()=>dispatch(decrByInput(inputVal))}>decrement input value</button>
                    <button onClick={()=>dispatch(incrByInput(inputVal))}>increment input value</button>
                </div>
            </div>
            <div className='reset'>
                <button  onClick={()=>{ dispatch( reset() ) }}>reset</button>
            </div>
        </div>
    )
}

export default MainApp
