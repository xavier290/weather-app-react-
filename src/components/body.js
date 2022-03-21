import DateData from "./date";

function Body({weatherData}) {
    return (
        <main className="body">
            <div className="temp"><p>{weatherData.main.temp}</p><span> ℃</span></div>
            <div className="more">
                <div className="name"> 
                    <p>{weatherData.name}</p>
                </div>
                <div className="date">
                    <DateData />
                </div>
            </div>
            <div className="icon"></div>
        </main>
    )
}

export default Body;