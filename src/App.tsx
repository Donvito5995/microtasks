import React, {MouseEvent, useState} from 'react';
import './App.css';
import {FullInput} from "./components/full input/fullInput";
import {Input} from "./components/full input/input";
import {Button} from "./components/full input/Button";


function App() {
    let [message, setMessage] = useState([
        {message: 'kok'},
        {message: 'kok'},
        {message: 'kok'}
    ])

    let [title, setTitle] = useState('')
    console.log(title)


    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler =()=>{
        addMessage(title)
        setTitle(" ")
    }

    return (
        <div>
            {/* <FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )

}

export default App;




