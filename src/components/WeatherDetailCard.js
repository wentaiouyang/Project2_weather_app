import React, { useEffect } from "react"
import classes from "../style/WeatherDetailCard.module.scss"
import {
  AnimatedWeatherIcon,
  AnimatedWeatherTypes,
  AnimatedWeatherTimes,
} from "animated-weather-icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowAltCircleDown,
  faThermometer,
  faThermometerHalf,
  faTint,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons"

function WeatherDetailCard({ city, weatherData }) {
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
      const renderTarget = document.querySelector(`#${city}-detail`)
      const icon = new AnimatedWeatherIcon(renderTarget)
      icon.setType(
        getIcon(weatherData.weather[0].icon),
        AnimatedWeatherTimes.Day
      )
    }
  }, [city, weatherData])

  const displayTemp = (temp) => {
    if (temp) {
      return Math.floor(temp - 273.15)
    }
    return "-"
  }

  return (
    <div className={classes.cardContainer}>
      <div className={classes.weather}>
        <div className={classes.tempratureContainer}>
          <p className={classes.cityName}>{city}</p>
          <p className={classes.temprature}>
            {weatherData && displayTemp(weatherData.main.temp)} °C
          </p>
          <p className={classes.minMax}>
            <b>Min:</b>{" "}
            {weatherData ? displayTemp(weatherData.main.temp_min) : "-"} °C |{" "}
            <b>Max:</b>
            {weatherData ? displayTemp(weatherData.main.temp_max) : "-"} °C
          </p>
        </div>
        <div className={classes.iconContainer}>
          <div id={`${city}-detail`} className={classes.icon}></div>
        </div>
      </div>

      <div className={classes.detailInfo}>
        <div>
          <p>
            <FontAwesomeIcon icon={faThermometerHalf} size="md" color="grey" />
            <b>Feels Like:</b>{" "}
            {weatherData ? displayTemp(weatherData.main.feels_like) : "-"} °C
          </p>
          <p>
            <FontAwesomeIcon icon={faWind} size="md" color="grey" />
            <b>Wind:</b> {weatherData ? weatherData.wind.speed : "-"} km/h
          </p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              size="md"
              color="grey"
            />
            <b>Pressure:</b> {weatherData ? weatherData.main.pressure : "-"} mb
          </p>
          <p>
            <FontAwesomeIcon icon={faTint} size="md" color="grey" />
            <b>Humidity:</b> {weatherData ? weatherData.main.humidity : "-"} %
          </p>
        </div>
      </div>
      <div className={classes.forecast}></div>
    </div>
  )
}

export default WeatherDetailCard
