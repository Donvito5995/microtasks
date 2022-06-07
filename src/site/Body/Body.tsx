import React from "react";
type BodyProps ={
    text:string
}

export const Body =(props:BodyProps) =>{
    return (
        <div>
            {props.text}
        </div>
    )
}