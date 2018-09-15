// Extract react from "node modules" and add to React var
import React from 'react';
import ReactDOM from 'react-dom';

// This key allow us call youtube api
const API_KEY = 'AIzaSyC3Q5YmxCqGB7BGC8ovydEN-T69Dknob5s';

// Create a new component
// and this component produce some HMTL
const App = () => {
    return <div>Hola</div>; 
}

// Take this component generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));