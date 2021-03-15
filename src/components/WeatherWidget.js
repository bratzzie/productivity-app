import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ActivityIndicator from "react-activity-indicator";

const WeatherWidget = () => {
  const [refreshing, setRefreshing] = React.useState(true);
  const [forecast, setForecast] = React.useState(null);

  const loadWeather = async (city) => {
     
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=9dfda962b85aeaaf42406d96d4f360e5&units=metric`
    );
    const data = await response.json();
    if (!response.ok) {
      console.error(`Error retrieving weather data: ${data.message}`);
    } else {
      setForecast(data);
    }

    setRefreshing(false);
  };




  useEffect(() => {
    if (!forecast) {
      loadWeather();
    }
  }, []);

  if (!forecast) {
    return (
      <div>
        <ActivityIndicator
          number={5}
          diameter={40}
          borderWidth={1}
          duration={300}
          activeColor="#66D9EF"
          borderColor="white"
          borderWidth={5}
          borderRadius="50%"
        />
      </div>
    );
  }
  return (
    <div>
      {loadWeather("Kiev")}
    </div>
  );
};

export default WeatherWidget;
  //     setRefreshing(true)
    //     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=28de34478f0127a5077b1c862ead605a&units=metric`)
    //     const weatherData = await response.data;

    //     if (!response.ok) {
    //         console.error(`Error retrieving weather data: ${weatherData.message}`);
    //     } else {
    //         localStorage.setItem('weather', 'helo');
    //     }
    //     setRefreshing(false)
    //    }

    //    useEffect(() => {
    //     if (localStorage.getItem("weather") === null)
    //     {
    //       loadWeather();
    //     }
    //   });

    //   if (localStorage.getItem("weather") === null) {
    //     return (
    //       <div>
    //         <ActivityIndicator
    //     number={5}
    //     diameter={40}
    //     borderWidth={1}
    //     duration={300}
    //     activeColor="#66D9EF"
    //     borderColor="white"
    //     borderWidth={5}
    //     borderRadius="50%"
    // />
    //       </div>
    //     );
  //   function refreshPage() {
  //     window.location.reload(false);
  //   }