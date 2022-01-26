import React, { useEffect } from "react"
import classes from "../style/WeatherCard.module.scss"
import {
  AnimatedWeatherIcon,
  AnimatedWeatherTypes,
  AnimatedWeatherTimes,
} from "animated-weather-icon"

function WeatherCard({ city, temprature, weather }) {
  const cityName = city.replace(" ", "_")
  useEffect(() => {
    const renderTarget = document.querySelector(`#${cityName}`)
    const icon = new AnimatedWeatherIcon(renderTarget)
    icon.setType(AnimatedWeatherTypes.Clear, AnimatedWeatherTimes.Day)
  }, [cityName])

  return (
    <div className={classes.container}>
      <p className={classes.cityName}>{city}</p>
      <div id={cityName} className={classes.weatherIcon}></div>
      <p className={classes.temprature}>{temprature} °C</p>
      <p>Cloud</p>
      <div className={classes.minMaxContainer}>
        <p>min</p>
        <p>max</p>
      </div>
    </div>
  )
}

export default WeatherCard
