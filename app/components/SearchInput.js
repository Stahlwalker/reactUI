import React, { Component } from 'react';

export default class SearchInput extends Component {

    onInputChange(e) {
        console.log(e.target.value);
    }

    render() {
        return (
            <input 
            type = "email"
            placeholder= "Search"
            className = "form-control"
            onChange = { this.onInputChange.bind(this) }
            />
        );
    }


}
