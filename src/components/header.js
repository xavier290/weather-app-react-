import { useEffect, useState } from "react"

const header = () => {
    const [ dateData, setDate ] = useState([]);
    
    useEffect(() => {
        let now = new Date();
        let data = getDate(now);
        setDate(data);
    }, [dateData]);

    function getDate(d) {
        let months = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December",
          ]
          let days = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
          ]
        
          let day = days[d.getDay()];
          let date = d.getDate() + ",";
          let month = months[d.getMonth()];
          let year = d.getFullYear();
        
          return `${day} ${date} ${month} ${year}`;
    }
    return (
        <header>
            <div className="logo">
                <p>The weather</p>
            </div>
            <div className="date">
                <p>{dateData}</p>
            </div>
        </header>
    )
}

export default header;