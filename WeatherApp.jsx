import "./WeatherApp.css";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempmax: 25.05,
        tempmin: 20.54,
        humidity: 47,
        weather: "heze",
    });

    let updateInfo = (newInfo) => [
        setWeatherInfo(newInfo)
    ]

    return (
        <div className="parent">
            <h2><i>WEATHER APP BY VISHAL</i></h2>
            <br />
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}