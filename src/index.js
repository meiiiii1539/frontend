import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Cart from './component/Cart/Cart';
// import Bag from './component/Bag/Bag';
// import Checkout from './component/Checkout/Checkout'
import NavbarManager from './component/Navbar/NavbarManager';
import Update from './component/Update/Update';
import Business from './component/Business/Business'
// import Member from './component/Member/Member'
// import Home from './component/Home/Home'
import Sidebar from './component/Cart/sidebar';
import NavbarConsumer from './component/Navbar/NavbarConsumer';
const root = ReactDOM.createRoot(document.getElementById('root'));

// const i=2;
root.render(
  <React.StrictMode>
    <div className="APP">
      <Router>

        <Routes>
          {/* <Route path="/bag" element={<><NavbarConsumer />  <Bag /></>} /> */}
          {/* <Route path="/checkout" element= { <><NavbarConsumer/><Checkout/></>}/> */}
          <Route path="/business" element={<><NavbarManager /> <Business /></>} />
          {/* <Route path="/member" element={<><NavbarConsumer /><Member /></>} /> */}
          {/* <Route path="/home" element={<><NavbarConsumer /><Home /></>} /> */}
          <Route path="/sidebar" element={<><NavbarConsumer /><Sidebar /></>} />
          <Route path="/cart" element={<><NavbarConsumer /><Cart /></>} />
          <Route path="/Update" element={<><NavbarManager /><Update /></>} />

        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
