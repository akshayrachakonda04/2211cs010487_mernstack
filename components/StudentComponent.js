import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import cardProfile from "../components/images/images02.png";
// function StudentComponent(){

//     const apiurl='https://shiva9111.github.io/mernstack/Book.json';
    
//     const[students, setstudents]= useState([]);

//     const fetchstudents=async ()=>{
//         const response= await fetch(apiurl);
//         const students=await response.json();
//         setstudents(students);
//     }
//     useEffect(()=>{
//         fetchstudents();
//     },[])

//     return(
//         <div className="studentComponent">
//             <div class="row row-cols-2 row-cols-md-2 g-4">
// 				{students.slice(27,33).map((eachstudent, index)=> (
// 					<div class="col">
// 						<div className="card">
// 							<div className="card-body">
// 								<h5 className="card-title">{eachstudent.Name}</h5>
// 								<h6 className="card-subtitle mb-2 text-body-secondary">{eachstudent.Roll}</h6>
// 								<p className="card-text">{eachstudent.SemCode}</p>
// 								<a href={eachstudent.EmailId} class="card-link">{eachstudent.EmailId}</a>
// 							</div>
// 						</div>
// 					</div>
// 				))}
//             </div> 
//         </div>
//     );
// }
// export default StudentComponent;

function StudentCard() {
    const [students, fetchDetails] = useState([]);
    useEffect(() => {
      const fetchStudentDetails = async () => {
        const response = await fetch(
            "https://shiva9111.github.io/mernstack/Book.json"
        );
  
        const data = await response.json();
  
        console.log(data);
  
        fetchDetails(data);
      };
  
      fetchStudentDetails();
    }, []);
    return (
      <div className="row col-sm-12 g-4 center" id="Card1">
        {/* <h2>
          <u>Question-1</u>
        </h2> */}
        <h3 style={{color: "azure"}}>
          Create a React Component, Display Student info using Bootstrap Card
          Layout limit to 5 students and apply CSS Properties to the card.
        </h3>
        {/* <h4>
          Student Cards details fetched from{" "}
          <a
            href="https://shiva9111.github.io/mernstack/Book.json"
            style={{ color: "blueviolet" }}
          >
            https://shiva9111.github.io/mernstack/Book.json
          </a>
        </h4> */}
        {students.slice(27,32).map((studentCard, index) => (
          <Card
            style={{
              width: "16rem",
              margin: "6px",
              height:"400px",
              borderWidth: "2px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            // bg="warning"
            bg="dark"
            text="warning"
            border="dark"
          >
            <Card.Img
              variant="top"
              src={cardProfile}
              style={{
                height: "225px",
                width: "225px",
                marginRight: "auto",
                marginLeft: "auto",
                borderRadius: "8px",
              }}
            />
            <Card.Body>
              <Card.Title>{studentCard.Name}</Card.Title>
              <Card.Subtitle className="mb-2 ">
                {studentCard.Roll}
              </Card.Subtitle>
              <Card.Text>{studentCard.EmailId}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
  export default StudentCard;