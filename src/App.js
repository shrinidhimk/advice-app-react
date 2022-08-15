import './App.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [advice,setAdvice]=useState('');
  useEffect(()=>{
  fetchAdvice();
  },[])
const fetchAdvice = ()=>{
  axios.get('https://api.adviceslip.com/advice')
  .then((res)=>{
    const {advice} = res.data.slip;
    setAdvice(advice)
  })
  .catch((err)=>{
    console.log(err)
  });
}

  return (
    <div className="app">
      <div className='card'>
      <h2 className='heading'>{advice}</h2>
      <button onClick={fetchAdvice} className='button'>
        <span >GIVE ME ADVICE!</span>
      </button>
      </div>
    </div>
  );
}

export default App;
