import React from "react";
import icon from "../images/cloudy.png";

export default function WeatherCurrent(props) {

    return (
        <>
            <h1 id="weather-header">Current Weather</h1>

            <div class="current-weather">
                <img src={icon} alt="icon" />
                <div class="container">
                    <p>{props.data.timezone}</p>
                    <p>{props.data.current.weather[0].main}: it is {props.data.current.weather[0].description}</p>
                    <p>Temperature: {props.data.current.temp} °C, but feels like {props.data.current.feels_like} °C</p>
                    <p>WindSpeed: {props.data.current.wind_speed} m/s</p>
                    <p>Humidity: {props.data.current.humidity}%</p>
                </div>
            </div>
        </>
    )

}