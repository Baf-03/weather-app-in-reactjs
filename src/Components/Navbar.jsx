import React,{useContext,useState} from 'react'
import TextField from '@mui/material/TextField';
import NoteContext from "../Context/NoteContext";


function Navbar() {
  let [inputfield,setinputfield] = useState("")
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
  const SubmitHandler =(e)=>{
    e.preventDefault();
    getCity(inputfield)
  }
  return (
    
    <section className='flex justify-between lg:w-[80%] mx-auto items-center text-white my-4 p-3'>
        <div className=' text-[1rem] md:text-[2rem] font-bold pe-2'>Weather Application</div>
        <div><form onSubmit={(e)=>{SubmitHandler(e)}}><TextField id="filled-basic" label="Search" variant="filled" className='bg-slate-300 rounded-sm' onChange={(e)=>{setinputfield(e.target.value)}}/></form></div>
</section>

    
  )
}

export default Navbar