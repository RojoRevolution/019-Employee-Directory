import React from "react";


function EmployeeList(props) {
    return (
        <div className="container">
            <ul>
                <li>{props.result}</li>
            </ul>
        </div>
    )
}

export default EmployeeList;