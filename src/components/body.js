import DateData from "./date";
import SidePanel from "./sidePanel";

function Body({weatherData}) {
    return (
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
            <div className="icon"></div>
            <SidePanel open={true} weatherData={weatherData} />
        </main>
    )
}

export default Body;