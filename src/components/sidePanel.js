

const SidePanel = ({open, weatherData}) => {
    return (
        <div className={`menu ${open ? "active" : ""}`}>
            <p className="cnty">{weatherData.sys.country}</p>
            <nav className="nav-bar">
                <h2>Weather Details</h2>
                <ul className="list">
                    <li>Desc: {weatherData.weather[0].description}</li>
                    <li>Clouds: {weatherData.clouds.all} %</li>
                    <li>Wind: {weatherData.wind.speed} mts</li>
                    <li>Feels like: {weatherData.main.feels_like} °c</li>
                    <li>Max temp: {weatherData.main.temp_max} °c</li>
                    <li>Min temp: {weatherData.main.temp_min} °c</li>
                    <li>Humidity: {weatherData.main.humidity} %</li>
                    <li>Pressure: {weatherData.main.pressure} Pa</li>
                </ul>
            </nav>
        </div>
    );
}

export default SidePanel;