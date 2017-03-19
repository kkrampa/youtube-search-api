import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
          <div className="search-bar">
            <input id="search" type="text" onChange={event => this.onInputChange(event.target.value)} />
          </div>
        );
    }
}

export default SearchBar;
