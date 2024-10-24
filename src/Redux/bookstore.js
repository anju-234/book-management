import { configureStore } from "@reduxjs/toolkit"





const bookstore=configureStore({
    reducer:{
        bookReducer:bookslice
    }
})

export default bookstore