import React, { useEffect, useState } from "react"
import classes from "../style/WeatherCard.module.scss"
import { API_KEY, WEATHER_API } from "../api/endpoint"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {
  AnimatedWeatherIcon,
  AnimatedWeatherTypes,
  AnimatedWeatherTimes,
} from "animated-weather-icon"

function WeatherCard({ city }) {
  const cityName = city.replace(" ", "_")
  const [weatherData, setWeatherData] = useState(null)
  const navigate = useNavigate()
  const displayTemp = (temp) => {
    if (temp) {
      return Math.floor(temp - 273.15)
    }
    return "-"
  }

  // fetch the weather data
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: WEATHER_API,
        params: {
          q: city,
          unit: "metric",
          appid: API_KEY,
        },
      }).then((res) => {
        setWeatherData(res.data)
      })
    }
    fetchData()
  }, [city, cityName])

  // load the weather icon
  useEffect(() => {
    const iconSet = {
      "01d": AnimatedWeatherTypes.Clear,
      "02d": AnimatedWeatherTypes.BrokenClouds,
      "03d": AnimatedWeatherTypes.Cloudy,
      "04d": AnimatedWeatherTypes.Cloudy,
      "09d": AnimatedWeatherTypes.HeavyRain,
      "10d": AnimatedWeatherTypes.DrizzleShowers,
      "11d": AnimatedWeatherTypes.ThunderStorm,
      "13d": AnimatedWeatherTypes.HeavySnow,
      "50d": AnimatedWeatherTypes.Fog,
      "01n": AnimatedWeatherTypes.Clear,
      "02n": AnimatedWeatherTypes.BrokenClouds,
      "03n": AnimatedWeatherTypes.Cloudy,
      "04n": AnimatedWeatherTypes.Cloudy,
      "09n": AnimatedWeatherTypes.HeavyRain,
      "10n": AnimatedWeatherTypes.DrizzleShowers,
      "11n": AnimatedWeatherTypes.ThunderStorm,
      "13n": AnimatedWeatherTypes.HeavySnow,
      "50n": AnimatedWeatherTypes.Fog,
    }

    const getIcon = (icon) => {
      if (icon) {
        return iconSet[icon]
      }
    }

    if (weatherData) {
      const renderTarget = document.querySelector(`#${cityName}`)
      const icon = new AnimatedWeatherIcon(renderTarget)
      icon.setType(
        getIcon(weatherData.weather[0].icon),
        AnimatedWeatherTimes.Day
      )
    }
  }, [cityName, weatherData])

  const handleClickCard = () => {
    navigate(`/weather/${cityName}`)
  }

  return (
    <div className={classes.container} onClick={handleClickCard}>
      <p className={classes.cityName}>{weatherData && weatherData.name}</p>
      <div id={cityName} className={classes.weatherIcon}></div>
      <p className={classes.temprature}>
        {displayTemp(weatherData && weatherData.main.temp)} °C
      </p>
      <p className={classes.weatherText}>
        {weatherData && weatherData.weather[0].main}
      </p>
    </div>
  )
}

export default WeatherCard
