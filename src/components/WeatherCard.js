import React from "react";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";

export default function WeatherCard(props) {

    return(
        <div>
            {/* <WeatherCurrent data = {props.weatherData} /> */}
            <WeatherForecast data={props.weatherData} />
        </div>
    )

}