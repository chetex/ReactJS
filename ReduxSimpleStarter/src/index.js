// Extract react from "node modules" and add to React var
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component
// and this component produce some HMTL
const App = function () {
    return <div>Hola</div>; 
}

// Take this component generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));