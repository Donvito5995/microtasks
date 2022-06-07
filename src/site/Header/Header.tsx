import React from "react";

type HeaderProps ={
    title: string
}

export const Header = (props:HeaderProps) => {
    return(
        <div>
            {props.title}
        </div>
    )
}