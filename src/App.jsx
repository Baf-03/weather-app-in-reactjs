import { useEffect, useState ,useContext} from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MiddleSection from './Components/MiddleSection'
import axios from 'axios';
import NoteContext from './Context/NoteContext';

//setting context--------------------------------




function App() {
const {condition}=useContext(NoteContext);
let lowercaseCondition =condition.toLowerCase()
let backgroundClass;
// lowercaseCondition="asdsadd"

if(lowercaseCondition=="smoke"){
  backgroundClass ="bg-gradient-to-br from-black to-gray-700 text-white h-[100vh] w-[100%]"
}
else if(lowercaseCondition=="clouds"){
  backgroundClass ="bg-gradient-to-br from-gray-900 to-blue-900 h-[100vh] w-[100%] text-white"
}
else if(lowercaseCondition=="clear"){
  backgroundClass ="bg-gradient-to-br from-gray-700 to-cyan-900 h-[100vh] w-[100%] text-white"
}
else{
  backgroundClass =" bg-gradient-to-br from-gray-700 to-blue-800 h-[100vh] w-[100%] text-white"
}
  
  const [count, setCount] = useState(0);
 
  return (
    <>
     
      <div className={backgroundClass}>
     <Navbar/>
     <div className='flex justify-center  flex-col items-center  w-full h-[70vh] '>
        <section className=" flex justify-center items-center w-[100%]">
          <MiddleSection />
      </section>
      </div>
      {/* </NoteState> */}
      </div>
      
      
     
      
    </>
  )
}

export default App
