import './App.css';
import JSX_expression from './components/JSX_expressions';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import ListFunctionComponent from './components/ListFunctionComponent';
import EventDemo1 from './components/EventDemo1';
import EventDemo2 from './components/EventDemo2';
import StateProps from './components/StateProps';
import EventDemo4 from './components/EventDemo4';
import FormDemo1 from './components/FormDemo1';
import FormDemo2 from './components/FormDemo2';
import ListObjRender from './components/ListObjRender';
import { Routes, Route} from 'react-router-dom';
import Chuong2 from './pages/Chuong2';
import Chuong2form from './pages/Chuong2form';
import MixControlledComponent from './components/MixControlledComponent';
import UncontrolledComponent from './components/UncontrolledComponent';
import RenderWithCondition from './components/RenderWithCondition';
import reducer from './ReduxDemo';
import ReduxForm from './components/ReduxForm';
import { act, createContext, useEffect, useReducer, useRef, useState } from 'react';
import Content from './components/Content';
import ExUseCallback from './useCallBack/ExUseCallback';
import ExUseMemo from './components/ExUseMemo';
export const ThemeContext = createContext();
function App() {
  const handleReceiver = (param) =>{
    alert("Xin chào "+param)
  }
  const handleSubmit = (args, val)=>{
    alert(args + " " + val)
  }
  const lists = ["arr1","arr2"];
  const [count,setCount] = useState(0);
  const [List, SetList] = useState(lists);

  const [count1, setCount1] = useState(60);
  const timerID = useRef();
  const handleStart = () =>{
    timerID.current = setInterval(()=>{
      setCount1(prevCount => prevCount -1)
    },1000)
    console.log("Start -> " +timerID.current);
  }
  const handleStop = () =>{
    clearInterval(timerID.current);
    console.log("Stop -> " +timerID.current);
  }
  function handleList(){
    SetList([
      ...List,
      parseInt(Math.random()*1000)
    ])
  }
  useEffect(() =>{
    console.log("Render lại trang sẽ chạy vào useEffect này")
  })
  useEffect(() =>{
    console.log("Đầu vào là một callBack và 1 mảng rỗng")
  },[])
  useEffect(() =>{
    console.log("Đầu vào là một callBack và 1 biến phụ thuộc")
  },[count])
  const [theme,setTheme] = useState("light")
  const toggleTheme = () =>{
    setTheme(theme === "light" ? "dark" : "light")
  }
  // const reducer = (state,action) =>{
  //   switch(action){
  //     case UP_ACTION:
  //       return state + 1;
  //     case DOWN_ACTION:
  //       return state -1;
  //     default:
  //       throw new Error("Invalid action");
  //   }
  // }
  // const [count2, dispatch] =  useReducer(reducer,initState)

  return (
    
    <div className="container border my-3">
      <div>
        <img src ="https://devmaster.edu.vn/images/logo.png"/>
        <h1>React buổi 1</h1>
      </div>
      <JSX_expression></JSX_expression>
      <hr/>
      <ClassComponent />
      <FunctionComponent userName ="Viet Trung" name = "Devmaster"></FunctionComponent>
      <ListFunctionComponent renderData={"Danh sách thông tin"} renderStudent={"Trung, Khoi, Minh"}></ListFunctionComponent>
      <EventDemo1></EventDemo1>
      <br></br>
      <EventDemo2></EventDemo2>
      <br></br>
      <StateProps renderCompany = "Devmaster" onReceive = {handleReceiver}></StateProps>
      <br></br>
      <EventDemo4 onSubmit={handleSubmit}></EventDemo4>
      <br></br>
      <FormDemo1></FormDemo1>
      <br></br>
      <FormDemo2></FormDemo2>
      <br></br>
      <ListObjRender></ListObjRender>
      <MixControlledComponent></MixControlledComponent>
      <UncontrolledComponent></UncontrolledComponent>
      <RenderWithCondition></RenderWithCondition>
      <div className='App'>
        <img src="https://devmaster.edu.vn/images/logo.png" className='App-logo'></img>
      </div>
      <div className='alert alert-success'>
        <ReduxForm></ReduxForm>
      </div>
      <div className='alert alert-success'>
        <h2>Tìm hiểu về state</h2>
        <p>You click {count}</p>
        <p> List: {List.toString()}</p>
        <button onClick={()=>setCount(count+1)}>Số lần click</button>
        <button onClick={handleList}>Click để truyền thêm 1 tham số bất kỳ trong khoảng từ 1 đến 1000 vào List</button>
      </div>
      <ThemeContext.Provider value={theme}>
        <div style={{padding: 50}}>
          <button onClick={toggleTheme}>Chuyển giao diện</button>
          <Content></Content>
        </div>
        </ThemeContext.Provider>
      <div className='alert alert-success'>
            <h2>{count1}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
      </div>
      {/* <div className='alert alert-info'>
          <h1>{count2}</h1>
          <button onClick={() => dispatch({type: UP_ACTION})}>+</button>
          <button onClick={() => dispatch({type: DOWN_ACTION})}>-</button>
      </div> */}
      <div className='alert alert-info'>
        <ExUseCallback></ExUseCallback>
      </div>
      <div>
        <ExUseMemo></ExUseMemo>
      </div>
    </div>
  );
}

export default App;
