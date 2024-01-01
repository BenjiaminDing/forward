import  {createSlice} from "@reduxjs/toolkit";

const  counterStore=createSlice({
    name:'counter',
    initialState:{
        countFkValue:0,
    },

    reducers:{
        increment(state){
            state.countFkValue++
        },
        decrement(state){
            state.countFkValue--

        },

        addToNum(state,action){
            state.countFkValue=action.payload

        },
    }
})

// 解构创建的actionCreator
const {increment,decrement,addToNum}=counterStore.actions;

// 获取reducer
const  countReducer11=counterStore.reducer;

// 导出  创建的actionCreator 对象
export {increment,decrement,addToNum}
export  default  countReducer11;
