// import React from "react";

// function MyComponentWithoutJSX() {
//   const name = "Akshay Rachakonda";
//   const age = 19;
//   var currentTime = new Date().toTimeString();
//   const isLoggedIn = true;
//   const n = <hr></hr>;
//   const element = <h3 style={{ color: "green" }}>Hello World!</h3>;
//   return (
//     <div className="container">
//       <hr></hr>
//       <center>
//         <h3>Q2</h3>
//         <h4 className="table-warning">JSX Example</h4>
//         <p>{element}</p>
//         <h3>This is a component with JSX</h3>

//         <hr />
//         <h3>1. Attribute:</h3>
//         <h3 style={{ color: "violet" }}>School of Engineering</h3>
//         <p>CSE Department</p>
//         <hr />
//         <hr />
//         <h3>2. Expressions:</h3>
//         <h3 style={{ color: "yellow", fontWeight: "100px" }}>
//           Hello, I am {name}
//         </h3>
//         <p className="p">
//           <h6> I am {age} years old.</h6>
//         </p>
//         <hr />
//         <h3>3. Nested Elements:</h3>
//         <h2 style={{ color: "orange" }}>this is a nested element1</h2>
//         <h3 style={{ color: "blue" }}>this is a nested element2</h3>
//         <p>
//           <h4 style={{ color: "green" }}>this is a nested element3</h4>
//         </p>
//         <hr />

//         <h3>4. Function in JSX:</h3>

//         <div>
//           <p>
//             <h6>This is Current Time: {currentTime}</h6>
//           </p>
//         </div>
//         <hr />
//         <h3>5. HTML tags:</h3>
//         <a>Hello, Wellcome to Mern Stack</a>
//         <hr></hr>
//         <h3>6. Fragment:</h3>
//       </center>
//       <center>
//         <>
//           <p>This is a Fragment!</p>
//           <hr></hr>
//         </>
//         <h3>7.Condition Rendering:</h3>
//         <a>{isLoggedIn ? "Hi..!" : "Please log in..."}</a>
//       </center>
//     </div>
//   );
// }
// <hr />;

// function MyComponentWithJSX() {
//   return (
//     <div>
//       <center>
        
//         <h2 style={{ color: "maroon" }}>Hello World...!</h2>
//         <h3>This is a component with JSX</h3>
//       </center>
//     </div>
//   );
// }
// <hr />;

// function MyFunctionComponent() {
//   return (
//     <div>
//       <hr></hr>
//       <center>
//         <h3>Q3</h3>
//         <h2 className="text-warning">Function Component Example</h2>
//         <h3>Student Info</h3>

//         <table className="table" style={{ width: "500px", height: "200px" }}>
//           <thead>
//             <tr>
//               <th scope="col">S.No</th>
//               <th scope="col">StudentName</th>
//               <th scope="col">RollNo</th>
//               <th scope="col">Location</th>
//               <th scope="col">Mobile No</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr class="table-secondary">
//               <th scope="row">1</th>
//               <td>R. Akshay</td>
//               <td>2211CS010487</td>
//               <td>siddipet</td>
//               <td>7894651320</td>
//             </tr>
//             <tr class="table-secondary">
//               <th scope="row">2</th>
//               <td>R.Aadarsh</td>
//               <td>2211CS010490</td>
//               <td>siddipet</td>
//               <td>9645312975</td>
//             </tr>
//             <tr class="table-secondary">
//               <th scope="row">3</th>
//               <td>R.Sanjay</td>
//               <td>2211CS010495</td>
//               <td>siddipet</td>
//               <td>7845612315</td>
//             </tr>
//             <tr class="table-secondary">
//               <th scope="row">4</th>
//               <td>S.Shiva</td>
//               <td>2211CS010507</td>
//               <td>Kamareddy</td>
//               <td>9654521564</td>
//             </tr>
//           </tbody>
//         </table>
//       </center>
//       <hr></hr>
//     </div>
//   );
// }
// <hr />;

// class MyClassComponent extends React.Component {
//   render() {
//     return (
//       <div className="Container">
//         <center>
//           <h3>Q4</h3>
//           <h2 style={{ color: "pink" }}>Class Component Example</h2>
//           <h3>Employee Info</h3>
//           <table
//             className="table"
//             style={{
//               tableLayout: "centre",
//               width: "500px",
//               height: "200px",
//               alignContent: "center",
//             }}
//           >
//             <thead>
//               <tr>
//                 <th scope="col">S.No</th>
//                 <th scope="col">Emp_Name</th>
//                 <th scope="col">Emp_id</th>
//                 <th scope="col">Location</th>
//                 <th scope="col">Phone No</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr class="table-primary">
//                 <th scope="row">1</th>
//                 <td>S.Akshay</td>
//                 <td>511</td>
//                 <td>Banglore</td>
//                 <td>9876543210</td>
//               </tr>
//               <tr class="table-primary">
//                 <th scope="row">2</th>
//                 <td>M.Sharma</td>
//                 <td>451</td>
//                 <td>Goa</td>
//                 <td>7894561321</td>
//               </tr>
//               <tr class="table-primary">
//                 <th scope="row">3</th>
//                 <td>N.Harish</td>
//                 <td>079</td>
//                 <td>Chennai</td>
//                 <td>9784561210</td>
//               </tr>
//               <tr class="table-primary">
//                 <th scope="row">4</th>
//                 <td>V.Balaji</td>
//                 <td>621</td>
//                 <td>Hyderabad</td>
//                 <td>9018965423</td>
//               </tr>
//               <tr class="table-primary">
//                 <th scope="row">5</th>
//                 <td>P.Aravind</td>
//                 <td>458</td>
//                 <td>Mumbai</td>
//                 <td>7013545845</td>
//               </tr>

//               <hr></hr>
//             </tbody>
//           </table>
//         </center>
//       </div>
//     );
//   }
// }

// // export default {
// //   MyComponentWithoutJSX,
// //   MyComponentWithJSX,
// //   MyFunctionComponent,
// //   MyClassComponent,
// // };
// export default function Week2() {
//   return (
//     <div>
//       <h2>Week 2: Create React App with Components</h2>
//       <hr />
//       <h3>Question 1</h3>
//       <MyComponentWithJSX/>
//       <hr />
//       <h3>Question 2</h3>
//       <MyComponentWithoutJSX />
//       <hr />
//       <h3>Question 3</h3>
//       <MyFunctionComponent />
//       <hr />
//       <h3>Question 4</h3>
//       <MyClassComponent/>
//     </div>
//   );
// }
import React from "react";
import Table from "react-bootstrap/Table";
// import "./Week2.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ComponentWithJSX() {
  const name = "Akshay Rachakonda";
  var cTime = new Date().toTimeString();
  const isLoggedin = true;
  const tag = <h5 style={{ color: "Blue" }}>Hello, JSX!</h5>;
  const element = (
    <>
      <h1>Heading 1</h1>

      <p>Paragraph 1</p>
    </>
  );

  return (
    <div>
      <h2>My Component with JSX</h2>

      <h5>Example-1 :Atrribute</h5>
      <h5 style={{ color: "Orange" }}>Department of CSE</h5>
      <h5>
        <hr />
        Example-2 : Expressions
      </h5>
      <h5 style={{ color: "Green" }}>Hello ,I am {name}</h5>
      <hr />
      <h5>Example-3 : Functions</h5>
      <h5>displaying current time is {cTime}</h5>

      <hr />
      <h5>Example-4 : Conditional Rendering</h5>
      <h5>{isLoggedin ? "Welcome back!!!!" : "Please log in..."}</h5>
      <hr />
      <h5> Example-5:Fragments</h5>
      {element}
      <hr />
      <h5>Example-6 : Nested Elements</h5>
      <div>
        <h1>Malla Reddy University</h1>

        <h2>Department of CSE</h2>

        <p>Welcome to MERN Stack Classes!!!!!</p>
      </div>
      <hr />
      <h5>Example-7 :Basic HTML Tags</h5>
      {tag}
      <hr />
    </div>
  );
}
function ComponentWithoutJSX() {
  let asl = React.createElement(
    "h3",
    null,
    "Displaying Components without using JSX"
  );
  return <div>{asl}</div>;
}
function StudentInfo() {
  const studentDetails = [
    {
      sid: "2211CS010487",
      sname: "Akshay Rachakonda",
      gender: "Male",
      group: "G-7(A)",
    },
    {
      sid: "2211CS010490",
      sname: "Adarsh",
      gender: "Male",
      group: "G-7(A)",
    },

    {
      sid: "2211CS010495",
      sname: "Sanjay",
      gender: "Male",
      group: "G-7(A)",
    },
    {
      sid: "2211CS010507",
      sname: "Shiva",
      gender: "Male",
      group: "G-7(A)",
    },
  ];
  return (
    <div class="center">
      <h3>Displaying Using Function Component</h3>
      <h3>Student Details </h3>
      <Table striped bordered hover variant="danger">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name of the Student</th>
            <th>Gender</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student, index) => (
            <tr data-index={index}>
              <td>{student.sid}</td>
              <td>{student.sname}</td>
              <td>{student.gender}</td>
              <td>{student.group}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
class EmpDetails extends React.Component {
  render() {
    const employeeDetails = [
      {
        ename: "Akshay S",
        ds: "CEO",
        gender: "Male",
        company: "Amazon",
      },
      {
        ename: "Sharma",
        ds: "Front-end Developer",
        gender: "Male",
        company: "Meta",
      },
      {
        ename: "Balaji",
        ds: "Designer",
        gender: "Male",
        company: "Google",
      },
      {
        ename: "Harish",
        ds: "Back-end Developer",
        gender: "Male",
        company: "Netflix",
      },
    ];
    return (
      <div class="text-center center">
        <h3>Displaying using Class Component</h3>
        <h3>Employee Details </h3>
        <Table striped bordered hover variant="success">
          <thead>
            <tr>
              <th>Name of the Employee</th>
              <th>Designation </th>
              <th>Gender</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {employeeDetails.map((emp, index) => (
              <tr data-index={index}>
                <td>{emp.ename}</td>
                <td>{emp.ds}</td>
                <td>{emp.gender}</td>
                <td>{emp.company}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default function Week2() {
  return (
    <div>
      <h2>Week 2: Create React App with Components</h2>
      <hr />
      <h3>Question 1</h3>
      <ComponentWithJSX />
      <hr />
      <h3>Question 2</h3>
      <ComponentWithoutJSX />
      <hr />
      <h3>Question 3</h3>
      <StudentInfo />
      <hr />
      <h3>Question 4</h3>
      <EmpDetails />
    </div>
  );
}