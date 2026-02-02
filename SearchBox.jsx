import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "15138e6dc1be06cc2ad89d36fd755347";

    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    }

    let Change = (evt) => {
        setCity(evt.target.value);
        // console.log(evt.target.value);
    };

    let Submit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity(""); // clears textbox
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);

        }

    };
    return <div className="SearchBox">
        <form onSubmit={Submit}>
            <TextField id="city"
                label="City Name"
                variant="outlined"
                required value={city}
                onChange={Change} />
            <br /><br />
            <Button variant="contained"
                type="submit">Search </Button>
                {error&& <p style={{color:"red"}}>No such place exists</p>}
        </form>
    </div>
}