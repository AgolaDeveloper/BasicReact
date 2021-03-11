import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './callbacks.css'

// function Cal(){
    class Cal extends Component{
        constructor(){
            super()
            this.state={
                arr: [],
                fname:"",
                lname: "",

                age:"",
                mess:""

            }
        }

        change =(event)=>{
            this.setState(
                // {fname: event.target.value}
                {[event.target.name]: event.target.value}
            );
        }

        // lnam =(event)=>{
        //     this.setState(
        //         {lname: event.target.value}
        //     );
        // }

        // onam =(event)=>{
        //     this.setState(
        //         {age: event.target.value}
        //     );
        // }

        // mes =(event)=>{
        //     this.setState(
        //         {mess: event.target.value}
        //     );
        // }


        // clik=()=>{
        //     document.getElementById("pr").innerHTML=this.state.name;
        // }
// var arr= [];

//pushing items into array







render(){
    return(
        <div id="di">
            <p>First Name: {this.state.fname} <br />
                Last Name:{this.state.lname} <br/>
                Age: {this.state.age} <br/>
                Comment {this.state.mess}
            </p>
            <p id="pr">{this.state.fname}</p>
            <form>
            <label>What's your First name?</label>
            <input type="text" id="nam" placeholder="Owago" onChange={this.change} name="fname"/> 
        <br />
            <label>What's your Last name?</label>
            <input type="text" id="nam" placeholder="Ras" onChange={this.change} name="lname"/> 
            <br />
            
            <label>How old are you?</label>
            <input type="number" id="old " placeholder="18" onChange={this.change} name="age"/>
            <br/>
            <label>Comment:</label>
            <textarea type="text" id="tm" placeholder="your comment goes here..." onChange={this.change} name="mess"></textarea>
            {/* <button onChange={this.clik}>Sign Up</button> */}
            <br />
            <br />
            <br />
            
            <label>Enter Any Number:</label>
            <input id="add" ></input>
            <button >ADD TO ARRAY</button>
            </form>

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