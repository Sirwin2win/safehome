import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:'filter',
    initialState:{
        searchItem:''
    },
    reducers:{
        setSearchTerm:(state,action)=>{
            state.searchItem = action.payload
        }
    }
})
export const {setSearchTerm} = searchSlice.actions
export default searchSlice.reducer