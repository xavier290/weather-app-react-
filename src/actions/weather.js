const handleResponse = (response) => {
    if (!response.ok) {
      throw new Error("Please Enable your Location in your browser!");
    }
}

const getWeather = (lat, long) => {
    return (
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6dc03e881dc8b962bc1a29daeb884c5b`
        )
        .then((res) => {
            handleResponse(res);
            return res.json();
        })
        .then((data) => {
            return data;
        })
    );
}


const handleLocationError = (browserHasGeolocation) => {
    let infoWindow = browserHasGeolocation ? "Error: Pls enable your location in your browser." 
                                           : "Error: Your browser doesn't support geolocation."
    alert(infoWindow);
}

const Weather = {
    getWeather,
    handleLocationError
}

export default Weather;