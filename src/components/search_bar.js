import React, { Component } from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = { term: '' };

    }

    onChange(term){
        this.props.onSearch(term);
        this.setState({ term });
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={ event => this.onChange(event.target.value)} value={this.state.term} />
            </div>
        );
    };
}

export default SearchBar;