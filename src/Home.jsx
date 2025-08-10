import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import {useNavigate} from 'react-router-dom';
import './App.css'
import getStateFromZip from './helpers/stateGrabber';


function Home() {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);
  const nav = useNavigate();

  function handleChange(e) {
    setText(e.target.value)  // ✅ updates text with what user types
  }

  const navigate=()=>{

    const zip = text.trim(); // remove extra spaces

    if (zip.length !== 5 || !/^\d{5}$/.test(zip)) {
        setError("Please enter a valid 5-digit ZIP code.");
        return;
    }

    const st = getStateFromZip(zip);

    if (!st || st === 'none') {
        setError("ZIP code not recognized. Please check and try again.");
        return;
    }

    // Success! Clear any error and navigate
    setError(null);
    nav(`/upcoming-elections?zip=${encodeURIComponent(zip)}&state=${encodeURIComponent(st)}`);
    
  }

  return (
    <>
      <div>Welcome to:</div>
      <h1>Election Prep</h1>
      <div>America's #1 Election Information and Ballot Preparation Tool!</div>
      <div>Be Informed Before You Vote!</div>
      <div>Just input your ZIP and we will do the rest!</div>
      <div className="input-container">
        <input
          type="text"
          id="zipCode"
          placeholder="Ex: 10001"
          value={text}
          onChange={handleChange}
        />
        
        <button className="navButton" onClick={navigate}>Find Upcoming Elections in Your Area</button>
        
      </div>
      {error && <div className="error">{error}</div>}
    </>
  )
}

export default Home