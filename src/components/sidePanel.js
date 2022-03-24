
const SidePanel = ({open, weatherData}) => {
    return (
        <div className={`menu ${open ? "active" : ""}`}>
            <div className="img">
                <img alt="weather icon" src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}/>
            </div>
            <p className="cnty">{weatherData.sys.country}</p>
            <nav className="nav-bar">
                <h2>Weather details:</h2>
                <ul className="list">
                    <li>
                        <p>Desc: </p>
                        <span>{weatherData.weather[0].description}</span>
                    </li>
                    <li>
                        <p>Clouds: </p> 
                        <span>{weatherData.clouds.all} %</span>
                    </li>
                    <li>
                        <p>Wind: </p> 
                        <span>{weatherData.wind.speed} mts</span>
                    </li>
                    <li>
                        <p>Feels like: </p>
                        <span>{weatherData.main.feels_like} °c</span>
                    </li>
                    <li>
                        <p>Max temp: </p>
                        <span>{weatherData.main.temp_max} °c</span>
                    </li>
                    <li>
                        <p>Min temp: </p>
                        <span>{weatherData.main.temp_min} °c</span>
                    </li>
                    <li>
                        <p>Humidity: </p>
                        <span>{weatherData.main.humidity} %</span>
                    </li>
                    <li>
                        <p>Pressure: </p>
                        <span>{weatherData.main.pressure} Pa</span>
                    </li>                    
                </ul>
            </nav>
        </div>
    );
}

export default SidePanel;