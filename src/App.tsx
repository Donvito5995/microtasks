import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/button";

function App() {

    const Button1Foo =(subscriber:string,age:number)=> {
        console.log(subscriber, age)
    }

    const Button2Foo =(subscriber:string)=> {
        console.log(subscriber)
    }

    const Button3Foo = () => {
      console.log("I'm Stupid Button")
    }

    return (
        <div className="App">
            <Button name={"MyYouTubeChannel1"} callBack={()=>Button1Foo("I'm K",21)}/>
            <Button name={"MyYouTubeChannel2"} callBack={()=>Button2Foo("I'm S")}/>
            <Button name={"I'm STupid"} callBack={Button3Foo}/>
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

