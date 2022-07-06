import React, { useState } from "react";
import './UserInput.css'

function UserInput(props) {

    const [inputText, setInputText] = useState('');

    function handleChange(e) {
        setInputText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmitMessage(inputText);
        setInputText("");
    }

    return(
        <div class="userInput">
        <form action="" id="send-box">
            <input type="text" name="inputTxt" id="inputTxt" value={inputText} onChange={handleChange}></input>
            <button class="btn" type="submit" onClick={handleSubmit}>Send</button>
        </form>
        </div>
    );
}

export {UserInput};