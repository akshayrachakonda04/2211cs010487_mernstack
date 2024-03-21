import React,{ useState } from 'react';
import './Week6.css';

const Week6 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('guest');

  const handleToggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const WelcomeComponent = () => 
    <div className="welcome">
      <h4>You are logged in</h4> 
    </div>;
  const LoginComponent = () => <div className="login"></div>;
  const UserTypeComponent = ({ type }) => <div className="user-type">User type: ${type}</div>;


  let outputComponent;
  switch (userType) {
    case 'admin':
      outputComponent = <div className='logs' > 
                            <h4>Congrats..!</h4>
                            <h4>You are in Admin Block</h4>
                        </div>;
      break;
    case 'user':
      outputComponent = <div className='logs'> 
                            <h4>Congrats..!</h4>
                            <h4>You are in User Block</h4>
                        </div>;
      break;
    default:
      outputComponent = <div className='logs'><h4>Default ...!</h4></div>;
  };

  // Define the student details
  const students = [
    {
      rollNo: '2211CS010487',
      group: 'CSE',
      name: 'Akshay Rachakonda',
      subjects: ['MERN', 'OS', 'COA','P&S','DM','ADS']
    },
    {
      rollNo: '2211CS010495',
      group: 'CSE',
      name: 'Sanjay Rapelli',
      subjects: ['COA','P&S','MERN', 'OS','ADS','DM']
    }
  ];

  // StudentDetails component to render student information in cards
  const StudentDetails = () => (
    <div className="student-details">
      {/* <h2>Student Details</h2> */}
      {/* Map through the students array and render each student as a card */}
      {students.map((student, index) => (
        <div key={index} className="student-card">
          <h3>Student {index + 1}</h3>
          <p>Name: {student.name}</p>
          <p>Roll No: {student.rollNo}</p>
          <p>Group: {student.group}</p>
          <p>Subjects: {student.subjects.join(', ')}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="parent-container">
        <h1 className='heading'>Week 6 <br></br>
        Create React App and Show Multiple Components using Conditional Rendering & List</h1>
      <div className="container1">
        <div className="output">
          <h1>Displaying Ternary Operator</h1>

          {isLoggedIn ? <WelcomeComponent /> : <LoginComponent />}
          <button className='btn-log' onClick={isLoggedIn ? handleLogout : handleToggleLogin}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
          
          <hr />

          <h1>Displaying Logical Operator</h1>
          {isLoggedIn && <div className="user-info">
            <h4>This is logical operator ...!</h4>
          </div>}

          <hr />

          <h1>Displaying If-Else Condition</h1>
          {isLoggedIn && <div className='user-info'>
            <h4>This is if else condition ...!</h4>
          </div>}

          <hr />

          <h1>Displaying Switch-Case </h1>
          {/* Output based on selected user type */}
          {outputComponent}
          {/* Buttons for Switch-Case Condition */}
          <div className='btn'>
            <button onClick={() => setUserType('admin')}>Admin Login</button>
            <button onClick={() => setUserType('user')}>User Login</button>
            {/* <button onClick={() => setUserType('default')}>Set Default</button> */}
          </div>
        </div>
      </div>
      
      {/* Render the StudentDetails component */}
      <hr></hr>
      <h1>Student Details</h1>
      <div className="cont2">
       
        <StudentDetails />
      </div>
    </div>
  );
};

export default Week6;