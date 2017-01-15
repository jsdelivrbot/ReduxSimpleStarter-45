import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        console.log('[SearchBar] -> constructor');
        super(props);

        this.state = { term: '' };
    }

    render() {
        console.log('[SearchBar] -> render');

        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        // console.log('[SearchBar] -> onInputChange');

        this.setState({ term: term });
        this.props.onSearchTermChange(term);

    }
}

export default SearchBar;