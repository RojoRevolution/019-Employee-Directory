import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";


function MainContainer() {
    return (
        <div>
            <Header />
            <SearchBar />
            <EmployeeList />
        </div>
    );
}



export default MainContainer;