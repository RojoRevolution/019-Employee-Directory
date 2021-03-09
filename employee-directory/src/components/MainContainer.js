import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ResultContainer from "./ResultContainer";


function MainContainer() {
    return (
        <div>
            <Header />
            <SearchBar />
            <ResultContainer />
        </div>
    );
}



export default MainContainer;