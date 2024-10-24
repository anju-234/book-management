import { createSlice } from "@reduxjs/toolkit";




const bookslice=createSlice({
    name:"books",
    initialState:[],
    reducers:{
        addBook:(state,action)=>{
            state.books.push(action.payload)
        },
        deleteBook:(state,action)=>{
            state.books=state.books.filter(book=>book.id!=action.payload)
        },
       }
})


export const{addBook, deleteBook}=bookslice.actions
export default bookslice.reducer