import React, { useEffect, useState } from "react";
import images02 from './images/images02.png'
function EmpComponent(){

    const apiurl='https://shiva9111.github.io/mernstack/excel-to-json.json';
    
    const[employees, setemp]= useState([]);

    const fetchemp=async ()=>{
        const response= await fetch(apiurl);
        const employee=await response.json();
        setemp(employee);
    }
    useEffect(()=>{
        fetchemp();
    },[])

    return(
        <div className="studentComponent">
            <div class="row row-cols-2 row-cols-md-2 g-4">
            {employees.slice(0,6).map((eachEmployee, index)=> (
                <div class="col">
                <div className="card">
                <div className="image-container"> {/* Added container for image */}
                <img
                  src={images02}
                  className="card-img-top"
                  alt={'Employee ${index + 1}'}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px', border: '2px solid #ccc' }} // Adjusted image size
                />
              </div>
                <div className="card-body">
                        <h5 className="card-title" style={{fontFamily:'Georgia'}}>{eachEmployee.NAME}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{eachEmployee.CODE}</h6>
                        <p className="card-text">{eachEmployee.DESIGNATION} years Experience</p>
                        </div>
            </div>
            </div>
            ))}
            </div>
            
                
        </div>
    );
}
export default EmpComponent;