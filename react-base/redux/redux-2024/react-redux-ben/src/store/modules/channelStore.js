import  {createSlice} from "@reduxjs/toolkit";
import axios from "axios";



const  channelStore=createSlice({
    name:'channel',
    initialState:{
        channelList :[]
    },
    reducers:{
        setChannels(state,action){
            state.channelList=action.payload
        }
    }
})

// 异步请求
const {setChannels} =channelStore.actions;
const channelReducer=channelStore.reducer;
// 单独封装一个函数
const  fetchChannlList=()=>{
    return  async (dispatch)=>{
       let url='http://geek.itheima.net/v1_0/channels';
       const  res= await  axios.get(url);
       console.log(res)
        // debugger
        dispatch(setChannels(res.data.data.channels));
    }

}



export {fetchChannlList}
export  default  channelReducer;
