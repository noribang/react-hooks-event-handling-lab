// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    /* Callback function event handler. */
    function focusMessage() {
        console.log("Good!")
    }
    function blurMessage() {
        console.log("Hey! Eyes on me!")
    }

    return (
        /* Add event listeners and pass in event handler 
           callback function. */
        <button onFocus={focusMessage} onBlur={blurMessage}>Eyes on me</button>
    )
}

export default EyesOnMe;