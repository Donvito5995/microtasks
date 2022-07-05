import React, {ChangeEvent, useState} from "react";

type FullInputType ={
    addMessage:(title: string)=>void
}

export const FullInput = (props:FullInputType)=>{
    let[title,setTitle]= useState('')

    let onChangeInputHandler =(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)

    }

    let onClickButtonHandler =()=>{
        props.addMessage(title)
        setTitle('')
    }

    return(
    <div>
        <input value={title} onChange={onChangeInputHandler}/>
        <button onClick={onClickButtonHandler}>+</button>
    </div>
    );
};
