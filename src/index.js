import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import { BroWheresThatCar } from "./BroWheresThatCar"
import reportWebVitals from "./reportWebVitals";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <BroWheresThatCar />
    </BrowserRouter>
    </React.StrictMode>
  
);


reportWebVitals();