import React from "react";

export default function Header(){
    return(
        <header>
            <img 
                src='./images/troll-face.png'
                className="header-image"
                alt="logo"
            />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course Project</h4>
        </header>
    )
}