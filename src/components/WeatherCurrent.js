import React from "react";
import icon from "../images/cloudy.png";

export default function WeatherCurrent(props) {

    return (
        <>
            <h1 id="current">Current Weather</h1>

            <div class="current-weather">
                <img src={icon} alt="icon" />
                <div class="container">
                    <p>City: {props.data.name}</p>
                    <p>{props.data.weather[0].main}: it is {props.data.weather[0].description}</p>
                    <p>Temperature: {props.data.main.temp}, but feels like {props.data.main.feels_like}</p>
                    <p>WindSpeed: {props.data.wind.speed} m/s</p>
                    <p>Humidity: {props.data.main.humidity} %</p>
                </div>
            </div>
        </>
    )

}