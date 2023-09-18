import React,{useContext} from "react";
import NoteContext from "../Context/NoteContext";

function SmallCards(props) {
   
  return (
    <>
      <div className="flex flex-col items-center justify-center  text-black p-5 border  backdrop-blur-lg backdrop-opacity-90  inset-0 z-0 border rounded-lg">
        <div>{props.time}</div>
        <div>
          {" "}
          <img
            src={`http://openweathermap.org/img/wn/${props.micon}@2x.png`}
            className="w-20"
          />
        </div>
        <div>{props.data}C</div>
      </div>
    </>
  );
}

export default SmallCards;
