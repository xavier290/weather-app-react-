import { useState } from "react";


const Header = ({weatherData}) => {
    const [ isOpen, setIsOpen ] = useState();
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <div className="logo">
                <p>The weather</p>
            </div>
            <div className={`menu ${isOpen ? "active" : ""}`}>
                <nav className="nav-bar">
                    <h2>Weather Details</h2>
                    <ul className="list">
                        <li>Desc: {weatherData.weather[0].description}</li>
                        <li>Feels like: {weatherData.main.feels_like} °c</li>
                        <li>Max temp: {weatherData.main.temp_max} °c</li>
                        <li>Min temp: {weatherData.main.temp_min} °c</li>
                        <li>Humidity: {weatherData.main.humidity} %</li>
                        <li>Pressure: {weatherData.main.pressure} Pa</li>
                    </ul>
                </nav>
            </div>
            <div className="menu-btn" onClick={toggle}>
                <div className={`menu-btn__burger ${isOpen ? "open" : ""}`}></div>
            </div>
        </header>
    )
}

export default Header;