    import React, { useState, useEffect } from "react";
    import NoteContext from "./NoteContext";
    import axios from "axios";
    import CircularProgress from "@mui/material/CircularProgress";

    const NoteState = (props) => {
    const [weatherData, setWeatherData] = useState("");
    const [forecastdata, setforecast_data] = useState("");
    const data_from_dates =[]

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=8a6506815b82d523f4d385ed3312b1a1&units=metric"
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
        try {
            const forecast_data = await axios.get(
            "https://api.openweathermap.org/data/2.5/forecast?q=karachi&appid=8a6506815b82d523f4d385ed3312b1a1&units=metric"
            );
            setforecast_data(forecast_data);
            console.log(forecast_data);
        } catch (error) {}
        };

        fetchData();
    }, []);
    const mera_function = () => {
        let j = 0;
        let my_array = [];


        // my_array.push(forecastdata.data.list[0].dt_txt);
        let new_Data = forecastdata.data.list[0].dt_txt;
        const entryDate = new Date(new_Data);
        const day = entryDate.toLocaleDateString();
        
        console.log(day);

        for (let i = 0; my_array.length<6; ++i) {
            let new_Data = forecastdata.data.list[i].dt_txt;
            let result = new_Data.slice(0, 9 + 1);
            // console.log("result", result);
            if (my_array.includes(result)) {
                // console.log("present");
            } else {
                my_array.push(result);
                data_from_dates.push(forecastdata.data.list[i])
                ++j;
            }
        // console.log("Array",my_array)
        
        }
        // console.log(my_array)
        // console.log(data_from_dates)
        
        
        
    
    };
    
    if (!weatherData || !forecastdata) {
        return (
        <div className="text-white">
            Loading <CircularProgress />
        </div>
        );
    } else {
        mera_function();
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
            
            
        }}
        >
        {props.children}
        </NoteContext.Provider>
    );
    };

    export default NoteState;
