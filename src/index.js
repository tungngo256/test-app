import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content.js';
import Footer from './Footer.js';
//import HomePage from './HomePage.js';
import SideBar from './SideBar.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SideBar/>
    <Content />
    <Footer/>
  </React.StrictMode>
);