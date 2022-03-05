import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import LoadingPage from './LoadingPage';
import WeatherCard from './WeatherCard';

function App() {
  const [forecastData, setforecastData] = useState();
  const [currentData, setCurrentData] = useState();
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("sydney");

  const API_URL = "https://api.openweathermap.org/data/2.5/";
  const API_KEY = "26282f759e528ce03b7fcdb82745a5b6";

  function searchCity(newCity) {
    setCity(newCity);
  }

  useEffect(() => {
    setLoading(true);
    const fetchForecastData = async () => {
      //https://api.openweathermap.org/data/2.5/forecast?q=sydney&units=metric&appid=26282f759e528ce03b7fcdb82745a5b6
      //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
      console.log(`${API_URL}forecast?q=${city}&units=metric&APPID=${API_KEY}`);
      await fetch(`${API_URL}forecast?q=${city}&units=metric&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setforecastData(result)
          console.log("forecast", result);
        });
    }
    fetchForecastData().catch(console.error);

  const fetchCurrentData = async () => {
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    console.log(`${API_URL}weather?q=${city}&units=metric&APPID=${API_KEY}`);
    await fetch(`${API_URL}weather?q=${city}&units=metric&APPID=${API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setCurrentData(result)
        console.log("current", result);
      });
  }
    fetchCurrentData().catch(console.error);

  setLoading(false);

}, [city])

  return (

    <div>
      <Nav handleClick={searchCity} />
      {(forecastData && currentData && loading !== true) ? (
        <WeatherCard currentWeather = {currentData} forecastWeather = {forecastData} />
      ) : (
        <LoadingPage />
      )}
      <Footer />
    </div>
  );
}

export default App;
