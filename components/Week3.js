import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Week3.css";


//Question 1
export default function Week3() {
  const student = {
    RollNo: "2211CS010487",
    Name: "Akshay Rachakonda",
    Mobile: "7123456789",
    Email: "2211cs010487@mallareddyuniversity.ac.in",
  };
  return (
    <div>
      <h1>Week 3-Create React App and Demonstrate Props</h1>
      <div class="container-1">
        <h1>Question 1</h1>
        <h2>
          <u>Component based props</u>
        </h2>
        <h3>Rendering single attribute using props</h3>
        <PropsComponent name="Akshay Rachakonda"  />
        <h3>Rendering multiple attributes using props</h3>
        <PropsComponent name="Akshay Rachakonda" hallticket="2211CS010487" />
      </div>
      <hr></hr>
      <div class="container-2">
        <h1>Question 2</h1>
        <h2>
          <u>Function based props</u>
        </h2>
        <PropComponent
          ID="2211CS010487"
          name="Akshay Rachakonda"
          email="2211cs010487@mallareddyuniversity.ac.in"
        />
      </div>
      <hr></hr>
      <div class="container-3">
        <h1>Question 3</h1>
        <h2>
          <u>Class based props</u>
        </h2>
        <PropsClass eid="01" ename="sai" edesig="Engineer" />
      </div>
      <hr></hr>
      <div class="container-4">
        <h1>Question 4</h1>
        <h2>
          <u>Object destructing through props</u>
        </h2>
        <StudentComponent student={student} />
      </div>
    </div>
  );
}

const PropsComponent = (props) => {
  return (
    <div>
      <div>
        <div className="container-1">
          <h2 className="text-primary">
            Hello, 
            <span style={{ color: "green" }}>{ props.name}</span>
          </h2>
          <h2 className="text-secondary">
            Your Hall-ticket No. is:
            <span style={{ color: "maroon" }}>{props.hallticket}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

//Question 2
const PropComponent = (props) => {
  const studentDetails = [
    {
      sid: "2211CS010487",
      sname: "Akshay Rachakonda",
      semail: "2211cs010487@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211CS010490",
      sname: "Adarsh Rajaboina",
      semail: "2211cs010490@mallareddyuniversity.ac.in",
    },

    {
      sid: "2211CS010495",
      sname: "Sanjay Rapelli",
      semail: "2211cs010495@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211CS010507",
      sname: "Shiva Manish",
      semail: "2211cs010507@mallareddyuniversity.ac.in",
    },
    {
      sid: "2211CS010511",
      sname: "Akshay Sakinam",
      semail: "2211cs010511@mallareddyuniversity.ac.in",
    },
  ];
  return (
    <div>
      <div className="container-2">
        <div class="center">
          <h3>Displaying Using Function Component</h3>
          <h3>Student Details </h3>
          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name of the Student</th>
                <th>Email of the Student</th>
              </tr>
            </thead>
            <tbody>
              {studentDetails.map((student, index) => (
                <tr data-index={index}>
                  <td>{student.sid}</td>
                  <td>{student.sname}</td>
                  <td>{student.semail}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

//Question 3
class PropsClass extends React.Component {
  render() {
    const employeeDetails = [
      {
        eid: "01",
        ename: "Ram",
        ds: "CEO",
      },
      {
        eid: "02",
        ename: "lakshman",
        ds: "Manager",
      },
      {
        eid: "03",
        ename: "sita",
        ds: "Chairman",
      },
      {
        eid: "04",
        ename: "vibishan",
        ds: "Front-End Developer",
      },
    ];
    return (
      <div>
        <div className="container-3">
          <div class="text-center center">
            <h3>Displaying using Class Component</h3>
            <h3>Employee Details </h3>
            <Table striped bordered hover variant="danger">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Designation </th>
                </tr>
              </thead>
              <tbody>
                {employeeDetails.map((emp, index) => (
                  <tr data-index={index}>
                    <td>{emp.eid}</td>
                    <td>{emp.ename}</td>
                    <td>{emp.ds}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

//question 4
const StudentComponent = (props) => {
  console.log(props);
  const { student } = props;
  return (
    <div>
      <div className="container-4">
        <table className="table table-secondary table-striped">
          <tbody>
            <tr>
              <td>Roll No.:</td>
              <td>{student.RollNo}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{student.Name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{student.Email}</td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td>{student.Mobile}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
