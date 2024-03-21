import React from "react";
import StudentComponent from './StudentComponent';
import EmpComponent from "./EmpComponent";
import './Week5.css';


function week5(){
    return(
        <div className="week5">
            <h1>Week - 5</h1> 
            <h2> Create React App and Show Student List using Bootstrap Card Layout</h2>
            <div>
                <h3>Display Student info using Bootstrap Card Layout</h3>
                <br/>
                <StudentComponent/>
                <hr></hr>
                <h3 > Display Employees info using Bootstrap Card Layout</h3>
                <br/>
                <EmpComponent/>
            </div>
        </div>
    );
}
export default week5;