import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import "./App.css"
import weatherimg from "./images/weatherimg.jpg"

function App() {
  const [city,setCity] = useState("");
  const [temp,setTemp] = useState(0);


  useEffect(()=>{
    async function loadData(){
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d97f4e8219951652b54318c608b695ce`)
      if(response.status === 200){
      const temp = response.data.main.temp - 273.15;
      setTemp(Math.round(temp))
      }
     
    }
    loadData();
    setTemp(0)
  },[city])

  return (
    <div className='row'>
     <div className='col-6 ' >
     <span className='app-title'>weather app</span>
     <div className='img-container'>
     <img src = {weatherimg} className="img" />
     </div>
     </div>
     <div className='col-6 '>
    
     <div className='content-align app-container'>
      <span className=''>Wheater App</span>
     <input type="text" className='input-box' placeholder="Enter City"
      onChange={(e)=>{setCity(e.target.value)}}
      /> <br/>
       <h3>city : {city}</h3>
      <h3>Temp : {temp}</h3>
     </div>
     </div>
      
    </div>
  )
}

export default App
