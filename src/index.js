import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'jquery';
import 'jquery.easing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-bootstrap';
import './assets/css/animate.css';
import './assets/css/main.css';
import './assets/css/style.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
