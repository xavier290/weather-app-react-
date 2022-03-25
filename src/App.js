import "./styling/main.scss";
import React, { Fragment, useEffect, useState } from "react";

// components
import Header from "./components/header";
import Body from "./components/body";
// import Loader from "./components/Loader";
import ErrorHandler from "./components/ErrorHanlder";

// actions
import  Weather from "./actions/weather";

const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (navigator.geolocation)  {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              setLat(position.coords.latitude);
              setLong(position.coords.longitude);
          }, () => {
            setError('pls enable the geolocation service to continue using the website');
            // alert.show(error);   
          }
      );
    } else {
      setError(" we're so sorry! but it looks like your browser doesn't support geolocation");
      // alert.show(error);
    }
    // console.log(error);
    if(lat == "" || long == "") return;
      
    Weather.getWeather(lat, long)
    .then((data) => {
      // console.log(data);
      setWeatherData(data);
    })
    .catch((err) => {
      setError(err.message);
      // alert.show(error);
    });
  }, [lat, long, error]);

  return (
    <div className="App">
        {(typeof weatherData.main != 'undefined') ? (
          <Fragment>
            <Header weatherData={weatherData}/>
            <Body weatherData={weatherData} />
          </Fragment>
        ) : (
          <ErrorHandler message={error} />
        )}
    </div>
  );
}

export default App;