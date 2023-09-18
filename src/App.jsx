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
import TextField from '@mui/material/TextField';




function App() {
  
  const [count, setCount] = useState(0);

  return (
    <>
    
       <NoteState>
      
     <Navbar/>
     <div className='flex justify-center  flex-col items-center  w-full h-[70vh] '>
        <section className=" flex justify-center items-center w-[100%]">
          <MiddleSection />
      </section>
      </div>
      </NoteState>
      
      
     
      
    </>
  )
}

export default App
