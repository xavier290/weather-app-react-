const handleResponse = (response) => {
    if (!response.ok) {
      throw new Error("Error! seems like we had a problem, try again pls");
    }
}

const getWeather = (lat, long) => {
    return (
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6dc03e881dc8b962bc1a29daeb884c5b&units=metric`
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

const Weather = {
    getWeather,
}

export default Weather;