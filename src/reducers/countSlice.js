import { createSlice } from "@reduxjs/toolkit";
export const countSlice=createSlice({
    name:'count',
    initialState:{
        count:0
    },
    reducers:{

        plusCount:(state)=>{
            state.count+=1
        },
        minesCount:(state)=>{
            state.count-=1
        },
        resetCount:(state)=>{
            state.count =0
        }
    }
  
})
export const {plusCount,minesCount,resetCount}=countSlice.actions
export default countSlice.reducer