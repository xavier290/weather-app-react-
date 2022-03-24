import { Fragment } from "react";
import DateData from "./date";
import SidePanel from "./sidePanel";

function Body({weatherData}) {
    return (
        <Fragment>
            <main className="body">
                <div className="temp"><p>{weatherData.main.temp}</p>°</div>
                <div className="more">
                    <div className="name"> 
                        <p>{weatherData.name}</p>
                    </div>
                    <div className="date">
                        <DateData />
                    </div>
                </div>
                <div className="icon">
                    <img alt="weather icon" src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}/>
                    <p>{weatherData.weather[0].description}</p>
                </div>
            </main>
            <section className="sidepanel">
                <SidePanel open={true} weatherData={weatherData} />
            </section>
        </Fragment>
    );
}

export default Body;