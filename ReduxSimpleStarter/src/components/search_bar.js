// it similar to const Component = React.Component
import React, { Component } from 'react';


class SearchBar extends Component {
    render() {
        return <input />;
    }
}

// We have to define entry html point
// that main index can find and enter component
export default SearchBar;