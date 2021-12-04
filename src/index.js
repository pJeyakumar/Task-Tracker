import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // import our CSS file for styling
import App from './App'; // import our App file for the code
import reportWebVitals from './reportWebVitals';

// rendering our app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
