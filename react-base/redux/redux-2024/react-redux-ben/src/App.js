
import {useDispatch,useSelector} from "react-redux";
// 导入 actionCreator
import {decrement, increment,addToNum} from "./store/modules/counterStore";


import  {fetchChannlList} from "./store/modules/channelStore";
import React, {useEffect} from "react";

function App() {
    const {countFkValue}=useSelector(state => state.counterInd)


    const {channelList}=useSelector(state => state.channel33)
    const dispatch = useDispatch();//
    // 修改store中的数据 ，只能通过 useDispatch提交 action对象  里面的方法
    //
    useEffect(() =>{ dispatch(fetchChannlList())} , [dispatch])



    return (
        <div className="App">
            <button onClick={()=>dispatch(decrement())}>-</button>
            {countFkValue}
            <button onClick={()=>dispatch(increment())}>+</button>
            <br/>
            <button onClick={()=>dispatch(addToNum(20))}>setValue</button>
            <ul>
                {channelList.map(item =>
                    <li key={item.id} >{item.name}</li>)}
            </ul>

        </div>
    );
}

export default App;
