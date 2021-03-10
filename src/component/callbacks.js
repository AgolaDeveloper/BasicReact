import { render } from '@testing-library/react';
import React from 'react'
import './callbacks.css'

function Cal(){

var arr= [];

//pushing items into array

// function 
// pus=(e)=>{
//     var item;
//     item = document.getElementById("add").e.target.value;

//     ............................
//         // item.target.value;
//     //    var im =e.target.value;
//     // setTimeout(()=>{
//         // var im;
//         // item = document.getElementById("add");
//         // im =item.target.value;
//         ............................................
//         arr.push(item)
//     // }, 1000)
// }

// //displaying our array items

// // function items()
// items=()=>{
//     var it ="";
//     // setTimeout(()=>{
//         arr.forEach((itm)=>{
//              it =+ itm;
//         })
//     // }, 1000)

//     document.getElementById("par").innerHTML= it
//     // return it;

//     // function chan(){
//     //     var itms = document.getElementById("add").value.length;
//     //     document.getElementById("cha").innerHTML="you've just entered "+itms;

    


render();{
    return(
        <div id="di">
            <label>Enter Number:</label>
            <input id="add" ></input>
            <button >ADD INTO ARRAY</button>

            {/* onClick={pus} */}

            <br/>
            {/* the paragraph shall display the numbers upon entering */}
            <p id="cha"></p>
            <br/>
            {/* <input >SHOW ARRAY VALUES</input> */}
            <button >SHOW ARRAY VALUES</button> 
            {/* onClick={items} */}

            {/* the paragraph for showing/displaying array values */}
            <p id="par"> Your array values shall be displayed here: </p>
        </div>
    )

}

}

export default Cal;