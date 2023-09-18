import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import MiddleSection from './Components/MiddleSection'
import axios from 'axios';

//setting context--------------------------------
import React, { createContext } from 'react'
import NoteState from './Context/NoteState'
const NoteContext = createContext();


function App() {

  const [count, setCount] = useState(0);

  const callApi =async()=>{
   try{
    

      // let apidata =await axios.get("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=8a6506815b82d523f4d385ed3312b1a1&units=metric")
      // console.log(apidata.data)
      // let {main,name,sys,weather,wind} = apidata.data
      // const {feels_like,humidity,pressure,temp,temp_max,temp_min} = main
      // const {main:condition,description,icon}=weather[0]
      // const {country,sunrise,sunset,}=sys
      // console.log(condition);
      // console.log(main)

      // return({name,wind,feels_like,humidity,pressure,temp,temp_max,temp_min,condition,description,icon,country,sunrise,sunset})
    }
   catch(error){
      console.log(error)
   }
  }

  useEffect(()=>{
    // callApi();
  },[])


  return (
    <>
    <NoteState>
        <Navbar/>
        <section>
          <MiddleSection/>
      </section>
      </NoteState>
      
     
      
    </>
  )
}

export default App
