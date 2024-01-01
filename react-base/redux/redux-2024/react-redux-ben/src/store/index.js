import  {configureStore} from "@reduxjs/toolkit";
import countReducer11 from "./modules/counterStore";
import channelReducer from "./modules/channelStore";

// 创建store组合子模块
const  store=configureStore({
    reducer:{
        counterInd:countReducer11,
        channel33: channelReducer
    }
})

export default store
