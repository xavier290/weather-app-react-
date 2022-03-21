import { useState, useEffect } from "react"

const DateData = () => {
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
        <p>{dateData}</p>
    )
}

export default DateData;