import React from "react";

function SearchBar() {
    return (
        <div className="container-flex">
            <div className="container d-flex justify-content-center my-4">
                <form className="g-3 form-width">
                    <input className="form-control" type="text" placeholder="Enter Employee Name" aria-label="default input example" />
                    <button type="submit" className="btn btn-primary my-2 w-100">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar