import React from "react";


export default function LoadingPage(props) {

    return (
        <div class="info-page">
            <h1>
                Seems something wrong with fetching weather data 😓
            </h1>
            <p>
                code: {props.data.cod} <br />
                message: {props.data.message}
            </p>
            <p>
                Please try again by reloading the page.
            </p>
        </div>
    )

}