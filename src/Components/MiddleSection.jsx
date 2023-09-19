import React,{useContext} from "react";
import Cards from './Cards'
// import SmallCards from './smallCards'

import NoteContext from "../Context/NoteContext";
import CarouselRatio from "./slider";

function MiddleSection() {
    const {data_from_dates} = useContext(NoteContext);

  return (
    <div className='flex items-center justify-around flex-col'>
        <div className="w-[100vw] mb-11 "><Cards/></div>
        <div className="mt-[5%]  flex justify-center flex-col items-center w-[100vw]" >
            <h1 className="font-bold text-[2rem]">ForeCast Slider</h1>
       <div className="w-[100%] flex justify-center"><CarouselRatio /></div> 
        </div>
    </div>
  )
}

export default MiddleSection