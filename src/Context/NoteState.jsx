import React, { useState, useEffect } from "react";
import NoteContext from "./NoteContext";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularWithValueLabel from "./progress";



const NoteState = (props) => {
    let [citysearch, setCitySearch] = useState("karachi");
    const [weatherData, setWeatherData] = useState("");
    const [forecastdata, setforecast_data] = useState("");
    let [unit,setUnit]=useState("units=metric")
    const data_from_dates = [];
    let my_array = [];
    const days2 = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day_array = [];
    let [dateformat, setDate] = useState("");
    let value = 0;

    useEffect(() => {
        const fetchData = async () => {
         try {
          const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${citysearch}&appid=8a6506815b82d523f4d385ed3312b1a1&${unit} `
         );
         setWeatherData(response.data);
         
        } catch (error) {
        console.error("Error fetching weather data:", error);
        }
        try {
            const forecast_data = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${citysearch}&appid=8a6506815b82d523f4d385ed3312b1a1&${unit}`
            );
            setforecast_data(forecast_data);
            console.log(forecast_data);
            ChangeHandler();
        } catch (error) {
            if ((value = 1)) {
             toast.error("error finding City");
        } else {
          value = 1;
        }
      }
    };

    fetchData();
  }, [citysearch,unit]);
  //------------------------end of use Effect------------------------------------------


  const ChangeHandler = () => {
    console.log("what is");
    if (!forecastdata) {

      // toast.error("error finding City "+citysearch);
    } else {
      toast.success("successfully fetched data for " + citysearch);
      console.log(citysearch);
      mera_function();
    }
  };

  //mera funcion is used for getting dates of forecast prediction i mean array of them 
  //it selects elements of different dates and then store it in array
  //as well as it plays vital role in getting monday tues of forecast elements

  const mera_function = () => {
    let j = 0;
    let new_Data = forecastdata.data.list[0].dt_txt;
    const entryDate = new Date(new_Data);
    const day = entryDate.toLocaleDateString();

    for (let i = 0; my_array.length < 6; ++i) {
        let new_Data = forecastdata.data.list[i].dt_txt;
        let result = new_Data.slice(0, 9 + 1);

      if (my_array.includes(result)) {
        console.log("present");
      } else {
        let result2 = new Date(result);
        const dayOfWeek = result2.getDay();
        let daysname = days2[dayOfWeek];

        my_array.push(result);
        day_array.push(daysname);
        data_from_dates.push(forecastdata.data.list[i]);
        ++j;
      }
    }
  };

  if (!weatherData || !forecastdata) {
    return (
      <div className="text-white flex justify-center items-center h-[100vh] w-full">
        Loading <CircularProgress /><CircularWithValueLabel/>
      </div>
    );
  } else {
    mera_function();
    
  }
   //get data function is made for search functionality it will be pressed from navbar component
   const getCity = (data) => {
    if (data) {
      console.log("parent called");
      setCitySearch(data);
     
    } else {
      console.log("no data");
    }
  };
  const getUnit =(data)=>{
    if (data) {
      console.log("parent called");
      setUnit(data)
      
     
    } else {
      console.log("no data");
      setUnit("")
    }
  }

  const { main, name, sys, weather, wind, dt, coord } = weatherData;
  const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main;
  const { main: condition, description, icon } = weather[0];
  const { country, sunrise, sunset } = sys;
  const { lon, lat } = coord;
  const rounded_temp = Math.round(temp);

 

  return (
    <NoteContext.Provider
      value={{
        name,
        wind,
        feels_like,
        humidity,
        pressure,
        temp,
        temp_max,
        temp_min,
        condition,
        description,
        icon,
        country,
        sunrise,
        sunset,
        rounded_temp,
        data_from_dates,
        getCity,
        day_array,
        getUnit,
      }}
    >
      {props.children}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </NoteContext.Provider>
  );
};

export default NoteState;
