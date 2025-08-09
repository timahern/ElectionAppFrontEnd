//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import UpcomingElections from './UpcomingElections';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/upcoming-elections' element={<UpcomingElections/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
