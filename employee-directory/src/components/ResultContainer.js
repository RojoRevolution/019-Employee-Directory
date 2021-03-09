import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";


class ResultsContainer extends Component {
    state = {
        result: {},
        search: "",
    };

    componentDidMount() {
        // Call search movies with this query by default after all components load
        this.searchMovies('')
    }

    searchMovies = query => {
        API.search(query)
            .then(res => {
                console.log(res)
                this.setState({ result: res.data.results })
                console.log(this.state.result)
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        // There is only one form value so no need to use [name in the setState function]
        this.setState({
            search: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
    };

    render() {
        return (
            <EmployeeList name={this.state.result} />
        );
    }
}

export default ResultsContainer;
