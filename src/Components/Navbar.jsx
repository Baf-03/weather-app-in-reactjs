import React,{useContext} from 'react'
import TextField from '@mui/material/TextField';



function Navbar() {
    
  return (
    <section className='flex justify-between lg:w-[80%] mx-auto items-center text-white my-4 p-3'>
        <div className='text-[2rem] font-bold'>Weather Application</div>
        <div><TextField id="filled-basic" label="Filled" variant="filled" /></div>
    </section>

    
  )
}

export default Navbar