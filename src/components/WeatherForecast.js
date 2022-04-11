import React from "react";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function WeatherForecast(props) {
    const renderDailies = () => {
        let content = [];
        for (let i = 1; i <= 5; i++) {
            const item = props.data.daily[i];
            content.push(<WeatherForecastDaily data={item} />);
        }
        return content;
    };

    return (
        <>
            <h1 id="weather-header">Forecast Weather 5 days</h1>
            <div class="card-group">
                {renderDailies()}
            </div>
        </>
    )

}