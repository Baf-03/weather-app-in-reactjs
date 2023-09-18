import React,{useContext} from "react";
import NoteContext from "../Context/NoteContext";

function SmallCards(props) {
   
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white text-black p-5">
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
