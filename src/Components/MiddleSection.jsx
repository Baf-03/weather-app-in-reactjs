import React,{useContext} from "react";
import Cards from './Cards'
import SmallCards from './smallCards'

import NoteContext from "../Context/NoteContext";

function MiddleSection() {
    const {data_from_dates} = useContext(NoteContext);
    console.log(data_from_dates)
    console.log(data_from_dates[0].dt_txt)
    const data_coming =[2,2,2,2,2,2,]
  return (
    <div className='flex items-center justify-around'>
        <Cards/>
        <div className='text-white grid grid-cols-3 gap-4'>
           {data_from_dates.map((element,index)=>{
                return(
                    <SmallCards key={index} data={data_from_dates[index].main.temp} micon={data_from_dates[index].weather[0].icon} time={data_from_dates[index].dt_txt}/>
                    
                )
           })}

        </div>
    </div>
  )
}

export default MiddleSection