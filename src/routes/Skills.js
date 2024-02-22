import React from 'react';
import ReactDOM from 'react-dom';
import arduino from "./images/arduino.png";
import espressif from "./images/espressif.png";
import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import react from "./images/react.png";
import node from "./images/node.png";

export default function Skills(){
    return(
        <div className="skill-container">
            <img src={arduino} alt="" />
            <img src={espressif} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src={node} alt="" />            
        </div>
    )
}
