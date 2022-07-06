import React from "react";
import './Header.css'

function Header() {
    return (
        <nav>
            <img class="icon" src={require("./data/chatbot.png")} alt=""></img>
        </nav>
    )
}

export {Header}