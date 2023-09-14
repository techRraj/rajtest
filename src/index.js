import React from 'react';
 import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import ProductList from './ProductList';
// import Table2 from './Table2';
// import App from './App';


// import Login from './Login';
// import Api from './Api';
//import Register from './Register';
// import GetAPI from './GetAPI';
//import Table from './Table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <GetAPI/> */}
  {/* <Login/> */}
  {/* <Table/> */}
  {/* <Register/> */}
  {/* <Api/> */}
  {/* <App/> */}
  {/* <Table2/> */}
  <ProductList />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
