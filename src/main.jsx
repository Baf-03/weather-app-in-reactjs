// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NoteState from './Context/NoteState.jsx'
import React, { createContext } from 'react'

const NoteContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <NoteState>
  
    <App />
 
    </NoteState>
  // </React.StrictMode>,
)
