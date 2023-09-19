import * as React from 'react';
import {useContext} from "react";

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

import NoteContext from "../Context/NoteContext";




export default function CarouselRatio() {
    const {data_from_dates,day_array} = useContext(NoteContext);
    
   

  return (
   
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: 1100,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
        flexShrink: 0,
        flexGrow: 1,
        maxWidth: '50%',

       
      }}
    >
    
      
      {data_from_dates.map((item,index) => (
        <Card orientation="horizontal" size="lg" key={index} variant="outlined" sx={{backgroundColor: 'gray',}} >
          <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
            <div className='bg-gray-400 '>
            <img
            //   srcSet={`http://openweathermap.org/img/wn/${data_from_dates[index].weather[0].icon}@2x.png?h=auto&fit=crop&auto=format&dpr=2 2x` }
              src={`http://openweathermap.org/img/wn/${data_from_dates[index].weather[0].icon}@2x.png`}
              alt={item.title}
              style={{ filter: 'none' }} 
          
            
            />
            </div>
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
            <Typography level="title-md">{day_array[index]}</Typography>
            <Typography level="body-sm">Temp: {data_from_dates[index].main.temp}</Typography>
          </Box>
        </Card>
      ))}
     
    </Box>
   
  );
}