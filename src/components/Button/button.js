import React from "react";

export const Button = ({name='',classname='',type=''}) => {
    return(
        <button type={type} class={`bg-sky-500 hover:bg-sky-700 ${classname}`}>
            {name}
        </button>
    )
}