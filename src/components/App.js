import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';
import WeatherCard from './WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState();
  // const [currentData, setCurrentData] = useState();
  const [currentCity, setCurrentCity] = useState();
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("sydney");

  const API_URL = "https://api.openweathermap.org/data/2.5/";
  const API_KEY = "26282f759e528ce03b7fcdb82745a5b6";

  function searchCity(newCity) {
    setCity(newCity);
  }

  useEffect(() => {
    const fetchCoords = async () => {
      //https:api.openweathermap.org/geo/1.0/direct?q={city}&limit=5&appid={API Key}
      console.log(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`);
      await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setCurrentCity(result)
          console.log("current city", result);
        });
    }
    fetchCoords().catch(console.error);
  }, [city]);

  useEffect(() => {
    setLoading(true);
    
    const fetchWeatherData = async () => {
      //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={long}&units=metric&exclude=hourly,minutely&appid={API Key}

      console.log(`${API_URL}onecall?lat=${currentCity[0].lat}&lon=${currentCity[0].lon}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`);
      await fetch(`${API_URL}onecall?lat=${currentCity[0].lat}&lon=${currentCity[0].lon}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeatherData(result)
          console.log("weather", result);
        });
    }
    fetchWeatherData().catch(console.error);


    setLoading(false);

  }, [currentCity])

  return (

    <div>
      <Nav handleClick={searchCity} />
      {(weatherData && loading !== true) ? (
        [weatherData.current || weatherData.cod !== "200" ?
          <WeatherCard data={weatherData} /> :
          <ErrorPage data={weatherData} />]

      ) : (
        <LoadingPage />
      )}
      <Footer />
    </div>
  );
}

export default App;
