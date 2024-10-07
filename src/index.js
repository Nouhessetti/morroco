import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Navbar/Nav';
import Footer from './Footer/Footer';
import Cities from './Cities/Cities';
import Places from './Places/Places';
import Foods from './Foods/Foods';
import Travelinfo from './Travel_info/Travel_info';
import Toors from './Toors/Toors';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
  <Header />
    <Routes>
      
      <Route path='/' element={<App />} />
      <Route path='/cities' element={<Cities />} />
      <Route path='/places' element={<Places />} />
      <Route path='/foods' element={<Foods />}/>
      <Route path='/travel_info' element={<Travelinfo />} />
      <Route path='/toors' element={<Toors />} />
    </Routes>
  
    <Footer />
  </React.StrictMode>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
