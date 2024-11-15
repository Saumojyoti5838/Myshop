//padding:in padding more area is created that is background;
//padding left: it is used to create space at left by compressing the image
//margin left means shifting image in let direction
//border radius to change shape from rectangle to circle

import React from 'react';
import './App.css';
import HomePage from './components/home';
import Header from './components/Header';
import Footer from './components/Footer';
import MobilesPage from './components/mobiles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Earphones from './components/earphones';
import Watches from './components/watch';
import Accessories from './components/accessories';
import SupportPopover from './components/support';
import NewArrival from './components/New Arrival';
import Account from './components/Account';



function App() {
 
  return (
    <Router>
      <div className='A' >
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          
          <Route exact path="/mobiles" element={<MobilesPage />} />
          <Route exact path="/earphones" element={<Earphones/>} />
          <Route exact path="/watches" element={<Watches />} />
          <Route exact path="/accessories" element={<Accessories />} />
          <Route exact path="/SupportPopover" element={<SupportPopover />} />
          <Route exact path="/NewArrival" element={<NewArrival />} />
          <Route exact path="/account" element={<Account />} />
          

          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
