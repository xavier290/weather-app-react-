import "./styling/main.scss";
import React, { Fragment, useEffect, useState } from "react";

// components
// import SidePanel from "./components/SidePanel";
import Header from "./components/header";
import Body from "./components/body";
import Spinner from 'react-bootstrap/Spinner';

// actions
import  Weather from "./actions/weather";

const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  
  useEffect(() => {
    if (navigator.geolocation)  {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              setLat(position.coords.latitude);
              setLong(position.coords.longitude);
          }, () => {
              Weather.handleLocationError(true); // in case there were any errors while trying to get location
          }
      )
    } else {
        Weather.handleLocationError(false); // for when browser doesn't support geolocation
    }

    if(lat == "" || long == "") return;
      
    Weather.getWeather(lat, long)
    .then((data) => {
      // console.log(data);
      setWeatherData(data);
    });
  }, [lat, long]);

  return (
    <div className="App">
      {(typeof weatherData.main != 'undefined') ? (
        <Fragment>
          <Header weatherData={weatherData}/>
          <Body weatherData={weatherData}/> 
          {/* <SidePanel weatherData={weatherData}/> */}
        </Fragment>
      ): (
        <div className='loader'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default App;