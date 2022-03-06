import React from "react";
import WeatherCurrent from "./WeatherCurrent";
import WeatherForecast from "./WeatherForecast";

export default function WeatherCard(props) {

    return(
        <div>
            <WeatherCurrent data={props.data} />
            <WeatherForecast data={props.data} />
        </div>
    )

}