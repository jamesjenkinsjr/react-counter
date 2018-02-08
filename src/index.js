import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'; 
//import defaults to looking in node_modules

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
