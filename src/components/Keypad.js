// Code Keypad Component Here
import React from "react";

function KeyPad() {
    /* Callback function event handler. */
    function enterPassword() {
        console.log("Entering password...")
    }

    return (/* Add onChange event listener and pass event handler 
               callback function. */
            <input type="password" onChange={enterPassword} />
        )
}

export default KeyPad;
