import React, {MouseEvent,useState} from 'react';
import './App.css';
import {Button} from "./components/button";

function App() {
    //let a = 1
    let[a, setA]=useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const OnClickNull = ( ) => {
      setA(a=0);
    }

    return (
        <div className="App">
            <h1> {a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={OnClickNull}>0</button>
        </div>
    )
}

export default App;


/*/!*
    const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
        console.log("Hello I'm S")
    }

    const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
        console.log("Hello I'm K")
    }
*!/

/!*  const onClickHandler = (name:string) => {
      console.log(name)
  }*!/

const fool1 = () => {
    console.log("100200")
}
const fool2 = (number:number) => {
    console.log(number)
}

{/!*     <button onClick={(event) => {
                console.log("hello")
            }}>MyYouTubeChannel-1
            </button>*!/}
<button onClick={(event) =>onClickHandler("K")}>MyFirstYpuTubeSubscriber1</button>
<button onClick={(event) =>onClickHandler("S")}>MyFirstYpuTubeSubscriber2</button>
<button onClick={fool1}></button>
<button onClick={()=>fool2(100200)}></button>*/

