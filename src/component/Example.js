
import React from 'react'
import './Example.css';
//import Kenya from "../assets/kenya.jpg"
import kenya from '../assets/kenya.jpg'

function Foot() {
    return (
        <div id="footer-bg">
            <h3>this is foot</h3>
            <p>epsum <br /> <code>break</code></p>
        </div>
    )
}

function head(){
    return (
    <div >
        <h2>Here is Our Example</h2>
        <img src= {kenya} width="500px" alt="@kenyaImage" />
        <Foot/>
    </div>
    
    )
}

export default head;

