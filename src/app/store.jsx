import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './slices/counter'
import darkTheme from './slices/theme'

export default configureStore({
    reducer:{
        counter : CounterReducer,
        darkTheme : darkTheme
    }
})