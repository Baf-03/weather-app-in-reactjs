import React,{useContext} from "react";
import NoteContext from "../Context/NoteContext";
// import NoteContext from "../Context/NoteContext";






function Cards() {
    const {icon,name,country,wind,humidity,description,feels_like,temp_max,temp_min,temp,rounded_temp} = useContext(NoteContext);
    console.log(icon)
  return (
    <>
      <div className="w-[30%] mt-[3%]  border  backdrop-blur-lg backdrop-opacity-90  inset-0 z-0 border rounded-lg text-white">
        <div className="flex justify-around items-center">
          <div>
            {" "}
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              className="w-20"
            />
          </div>
          <div className="text-[2rem]">{rounded_temp}°</div>
        </div>

        <div className=" text-white text-xl font-bold text-center mt-3">
          {name},{country}
        </div>

        <div className="flex justify-around mt-4">
          <div>desc: {description}</div>
          <div>Feels Like: {feels_like}°C</div>
          <div>Max temp: {temp_max}</div>
          <div>Min temp: {temp_min}</div>
        </div>

        <div className="w-full flex justify-around mt-5">
          <button className="flex flex-col items-center bg-blue-600 p-3 rounded-lg">
            <div>Wind Speed</div>
            <div>{wind.speed} km/h</div>
          </button>
          <button className="flex flex-col items-center bg-green-600 p-3 rounded-lg">
            <div>Humidity</div>
            <div>{humidity} gm/m3</div>
          </button>
        </div>

        <div className="flex justify-around mt-5">
            <div className="font-bold">Visibility</div>
            <div>30.3</div>
        </div>
        <div className="w-100% h-[1px] bg-white my-3"></div>
        <div className="text-center p-3 text-[1.5rem] items-center">
           Rain,overCast
        </div>
      </div>
    </>
  );
}

export default Cards;
