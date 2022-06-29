import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AllLaunches from './pages/AllLaunches';
import UpComingLaunches from './pages/UpComingLaunches';
import PastLaunches from './pages/PastLaunches';
import LastestLaunches from './pages/LastestLaunches';

import './css/main.css';
import NextLaunches from './pages/NextLaunches';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Homepage /> } />
          <Route path='/next-launches' element={ <NextLaunches /> } />
          <Route path='/lastest-launches' element={ <LastestLaunches /> } />
          <Route path='/launches' element={ <AllLaunches /> } />
          <Route path='/upcoming-launches' element={ <UpComingLaunches /> } />
          <Route path='/past-launches' element={ <PastLaunches /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
