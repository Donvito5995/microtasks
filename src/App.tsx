import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./components/button";
import {ALL} from "dns";
import {NewComponent} from "./NewComponent";


function App() {


    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Hryvna', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Hryvna', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Hryvna', value: 50, number: ' v1234567890'},
    ])

    let [button, defineBtn]=useState('')

    let currentMoney = money;

    if (button==='Dollars'){currentMoney = money.filter((el)=>el.banknots==='Dollars')}
    else if(button==='Hryvna'){currentMoney = money.filter((el)=>el.banknots==='Hryvna')}



    const onClickHandlerButton=(e: React.MouseEvent<HTMLButtonElement>)=>{
        const btn = e.currentTarget.innerText
       defineBtn(button = btn)
    }
    return(
        <NewComponent  banknots={currentMoney} onClickHandler={onClickHandlerButton} />
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

