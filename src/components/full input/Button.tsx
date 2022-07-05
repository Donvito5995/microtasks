import React from "react";

type ButtonProps = {
    name:string,
    callBack:()=>void
}

export const Button =(props:ButtonProps)=>{

    let onClickButtonHandler=()=>{
        props.callBack()
    }

    return(
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}