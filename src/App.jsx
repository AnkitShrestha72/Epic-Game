import React,{ useEffect, useState} from "react";
import Increment from "./Components/Increment";
import Decrement from "./Components/Decrement";
import Names from "./Components/Names";
import UndoName from "./Components/UndoName";
import Navbar from "./Components/Navbar";
import Carosel from "./Components/Carosel";



const App=()=> {
  

const [data , setData] = useState(0)
const [names , setNames] = useState("God of war")

const incrementData = ()=>{
  setData(data+1);
}

const decrementData = ()=>{
  setData(data-1);
}

const changeName = () =>{
    setNames("Red Dead Redemption 2")
}

let a = "God of war";

const undoName = () =>{
    setNames(a)
}


  return (
     
     <div>
      <Navbar/>
      <Carosel/>
      <h5>Hello from App </h5>
      <h5>The Data currently is : {data}</h5>
      <Increment value={data} dataFun={incrementData}/>
      <Decrement value={data} dataFun={decrementData}/>

      <h5>The Name is : {names}</h5>
      <Names value={names} namedata={changeName}/>
      <UndoName value={names} namedata={undoName}/>
      
     </div>
     
  );
}

export default App;
