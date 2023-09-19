import React, { useContext } from "react";
import NoteContext from "../Context/NoteContext";
// import NoteContext from "../Context/NoteContext";

function Cards() {
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
    getUnit,
   
  } = useContext(NoteContext);
  console.log(icon);
  let icon_length_modified =icon.slice(0,2)
  console.log(icon_length_modified)
 
  return (
  
     

      <div className="flex flex-col justify-center items-center ">
        <section className="text-[1.7rem]">
        
          {name},{country}
        </section>
        <section className="flex  items-center justify-center h-[100%]">
          <div>
              <img
                src={`http://openweathermap.org/img/wn/${icon_length_modified}d.png`}
                className=" w-[4rem] md:w-32 "

              />
            </div>
            <div className="text-[3rem] md:text-[7rem]">{rounded_temp}°</div>
            <div className="md:text-[1.5rem] ms-2">
              <div onClick={()=>getUnit("units=metric")} className="transition ease-out hover:scale-125">C</div>
              <div onClick={getUnit} className="transition ease-out hover:scale-125">F</div>
            </div>
        </section>

        <section className="text-[1.7rem] capitalize">{description}</section>
        <section>Updated as</section>
        <section className="grid grid-cols-2 text-lg md:flex justify-around flex-wrap w-[80%] text-md mt-5">
          <div className="transition ease-out hover:scale-125">Air Quality:{} </div>
          <div className="transition ease-out hover:scale-125">Feels Like:{ Math.round(feels_like)} </div>
          <div className="transition ease-out hover:scale-125">Max-Temp: { Math.round(temp_max)}</div>
          <div className="transition ease-out hover:scale-125">Humidity: {humidity}</div>
          <div className="transition ease-out hover:scale-125">Wind Speed: {wind.speed}  Km/h</div>
   </section>
      </div>

  );
}

export default Cards;
