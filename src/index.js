import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Component/App';
import reportWebVitals from './reportWebVitals';
import Header from "./Component/header";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Project from "./Component/Project";
import Contact from "./Component/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <About />
    <Skills />
    <Project />
     <Contact />
  </React.StrictMode>
);

reportWebVitals();
