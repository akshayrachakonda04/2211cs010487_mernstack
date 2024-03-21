import React from "react";
import akhi from "./images/akhi.jpg";
// const MyComponentsWithoutJSX = () => {};
// const MyComponentsWithJSX = () => {};
const MyProfile = () => {};
function Week1() {
  return (
    <div className="Week1">
      <h1>Hello World..</h1>
      {/* <h1>Displaying my MyComponents Without JSX</h1> */}
      {/* <MyComponentsWithJSX />
      <hr />
      <h1>Displaying my MyComponents With JSX</h1>
      <MyComponentsWithJSX /> */}
      <hr />
      <p>Name: Akshay Rachakonda<br></br>
        Roll No.: 2211cs010487<br></br>
        Group: 7A
      </p>
      <hr></hr>
      <h1>Displaying my profile</h1>
      
      <MyProfile />
      <img
        src={akhi}
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "100px",
        }}
        alt="My profile pic"
      ></img>
      <h3>Akshay Rachakonda</h3>
      <p>
        I am Akshay Rachakonda. I was born in jagtial and raised in siddipet. I
        completed my 10th grade with 10 cgpa.On top of it, i completed my Higher
        secondary education with 97.9 % in Narayana college Hyderabad.
        Currently, I am persuing my Bachelor of sciences in computer science
        engineering at Mallareddy university in Hyderabad.
      </p>
    </div>
  );
}
export default Week1;
