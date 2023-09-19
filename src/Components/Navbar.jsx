import React,{useContext,useState} from 'react'
import TextField from '@mui/material/TextField';
import NoteContext from "../Context/NoteContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  let [inputfield,setinputfield] = useState("")
  let [isShow,setisShow] =useState(false)

 
  const {
    icon,
    name,
    country,
    wind,
    humidity,
    description,
    feels_like,
    temp_max,
    temp_min,
    temp,
    rounded_temp,
    getCity,
  } = useContext(NoteContext);

  const searchiconHandler =()=>{
    setisShow(true);
  }
  const SubmitHandler =(e)=>{
    e.preventDefault();
    getCity(inputfield)
    setisShow(false)
  }
 
  return (
    
    <section className='flex justify-between lg:w-[80%] mx-auto items-center text-white mb-4 p-3'>
        <div className=' text-[1rem] md:text-[2rem] font-bold pe-2'>Weather Application</div>
        {!isShow?(<div onClick={searchiconHandler} className='cursor-pointer className="transition ease-out hover:scale-125"'><FontAwesomeIcon icon={faMagnifyingGlass} className="transition ease-out hover:scale-125"  /></div>):(<div className='cursor-pointer '><form onSubmit={(e)=>{SubmitHandler(e)}}><TextField id="filled-basic" label="Search" variant="filled" className='bg-slate-300 rounded-sm' onChange={(e)=>{setinputfield(e.target.value)}}/></form></div>)}
</section>

    
  )
}

export default Navbar