import React from "react";

export default function WeatherForecastDaily(props) {

    function calculateDay(unixTime) {
        const currentDay = new Date(unixTime * 1000);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
        const day = days[currentDay.getDay()];
        const month = months[currentDay.getMonth()];
        const date = currentDay.getDate();

        return (day + ', ' + month + ' ' + date);
    }

    function calculateTime(unixTime) {
        const currentDay = new Date(unixTime * 1000);
        const hour = currentDay.getHours();
        const min = currentDay.getMinutes();

        return (hour + ":" + min);
    }

    return (
        <div class="card">
            <img class="card-img-top" src={"http://openweathermap.org/img/wn/" + props.data.weather[0].icon + "@2x.png"} alt="icon" />
            <div class="card-body">
                <h5>{calculateDay(props.data.dt)}</h5>
                <p>{props.data.weather[0].main}: it is {props.data.weather[0].description}</p>
                <p>day: {props.data.temp.day} °C</p>
                <p>night: {props.data.temp.night} °C</p>
                <p>Humidity: {props.data.humidity}</p>
                <p>Wind: {props.data.wind_speed}</p>
                <p><small class="text-muted">Sunrise: {calculateTime(props.data.sunrise)}</small></p>
                <p><small class="text-muted">Sunset: {calculateTime(props.data.sunset)}</small></p>
            </div>
        </div>
        )

}